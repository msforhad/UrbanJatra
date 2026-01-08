import { authModel } from "../model/authModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { transporter } from "../config/nodemailer.js";


//register
export const register = async(req,res)=>{
  const{name,email,password}=req.body;

  if(!name){
    return res.json({success:false,message:'Missing Name'}) 
  }
  if(!email){
    return res.json({success:false,message:'Missing Email'}) 
  }
  if(!password){
    return res.json({success:false,message:'Missing Password'}) 
  }

  try {
    const existingEmail = await authModel.findOne({email})
    if(existingEmail){
      return res.json({success:false,message:"Email already exists"})
    }

    //save to db
    const hashedPassword = await bcrypt.hash(password,10);
    const userData = new authModel({name,email,password:hashedPassword})
    await userData.save();

    //token create
    const token = jwt.sign({id:userData._id},process.env.JWT_SECRET,{expiresIn:'7d'});

    //cookie
    res.cookie('token',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV==='production'?'none':'strict',
      maxAge:7*24*60*60*1000
    })

    //sending welcome email
    const mailMessage ={
      from:process.env.SENDER_EMAIL,
      to:email,
      subject:'Welcome to UrbanJatra',
      text:`Welcome to UrbanJatra website.your account has been created with email id:${email}`
    }
    await transporter.sendMail(mailMessage);

    return res.json({success:true,message:'Register success fully'})
    
  } catch (error) {
    res.json({success:false,message:error.message})
    
  }

}

//login
export const login = async(req,res)=>{
  const {email,password}=req.body;

  if(!email){return res.json({success:false,message:'Email are required'})}

  if(!password){
    return res.json({success:false,message:'password are required'})
  }

  try {
    const userData = await authModel.findOne({email});

    if(!userData){
      return res.json({success:false,message:"Invalid Email"})
    }

    const isPassMatch = await bcrypt.compare(password,userData.password);

    if(!isPassMatch){
      return res.json({success:false,message:'Invalid password'})
    }

    const token =jwt.sign({id:userData._id},process.env.JWT_SECRET,{expiresIn:'7d'})

    res.cookie('token',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV==='production',
      sameSite:process.env.NODE_ENV==='production'?'none':'strict',
      maxAge:7*24*60*60*1000,
    })
    return res.json({success:true,message:'Login success fully'});
  } catch (error) {
    return res.json({success:false,message:error.message})
    
  }
}

//logout
export const logout= async(req,res)=>{
  try {
    res.clearCookie('token',{
      httpOnly:true,
      secure:process.env.NODE_ENV==='production',
      sameSite:process.env.NODE_ENV==='production'?'none':'strict',
      maxAge:7*24*60*60*1000,
    })

    return res.json({success:true,message:'Logged out success fully'})
    
  } catch (error) {
    return res.json({success:true,message:error.message})
    
  }
}

//verify otp send by email
export const emailVerifyOtp = async(req,res)=>{
  try {
    //cookies 
    const {token}=req.cookies;
    const tokenDecode=jwt.verify(token, process.env.JWT_SECRET);
    const userId = tokenDecode.id;
    const userData = await authModel.findById(userId)
    
    if(!userData){
      return res.json({success:false,message:"User not found"});
    }

    if(userData.isAccountVerified){
      return res.json({success:false,message:"Account already verified"})
    }

    //otp create
    const otp = String(Math.floor(100000+Math.random()*900000))
    console.log(otp)
    userData.verifyOtp=otp;
    userData.verifyOtpExpireAt=Date.now()+24*60*60*1000
    await userData.save();

    //mail option
    const mail={
      from:process.env.SENDER_EMAIL,
      to:userData.email,
      subject:'Account verification otp',
      text:`your otp is ${otp}.verify your account using this otp.`
    }

    await transporter.sendMail(mail);

    return res.json({success:true,message:'Verify otp success fully send'})
    
  } catch (error) {
    return res.json({success:false,message:error.message})
    
  }
}

//verify email
export const verifyEmail = async(req,res)=>{
  const {token}=req.cookies;
  const tokenDecode=jwt.verify(token, process.env.JWT_SECRET)
  const userId=tokenDecode.id;
  const{otp}=req.body;

  if(!userId||!otp){
    return res.json({success:false,message:'Missing details'});
  }

  try {
    const userData = await authModel.findById(userId);

    if(!userData){
      return res.json({success:false,message:'user not founded'});
    }

    if(userData.verifyOtp===''||userData.verifyOtp!==otp){
      return res.json({success:false,message:'Invalid otp'})
    }

    if(userData.verifyOtpExpireAt<Date.now()){
      return res.json({success:false,message:"otp expired"})
    }

    userData.isAccountVerified=true;
    userData.verifyOtp='';
    userData.verifyOtpExpireAt=0;
    await userData.save();

    return res.json({success:true,message:'Your account is verified'})
    
  } catch (error) {
    return res.json({success:false,message:error.message})
    
  }
}

//check user is authenticated
export const isAuthenticated = async(req,res)=>{
  const{token}=req.cookies;

  if(!token){
    return res.json({success:false,message:'Your account can nto logged in'})
  }else{

  try {
    const tokenDecode= jwt.verify(token,process.env.JWT_SECRET);
    const userId = tokenDecode.id;
    const userData = await authModel.findById(userId)

    userData.isAccountVerified? res.json({success:true,message:'Your account is verified'})
    : 
    res.json({success:false,message:'Your account is not verified.plz verify your account'})
    
  } catch (error) {
    res.json({success:false,message:error.message})
    
  }
}
}


//password reset otp send
export const passwordResetOtp=async(req,res)=>{
  const {email}=req.body;
  const userData = await authModel.findOne({email})

  if(!userData){
    return res.json({success:false,message:'User not founded'})
  }

  try {
    const otp=String(Math.floor(100000+Math.random()*900000));
    userData.resetOtp=otp;
    userData.resetOtpExpireAt=Date.now()+15*60*1000;
    await userData.save();

    const mail={
      from:process.env.SENDER_EMAIL,
      to:userData.email,
      subject:'Password Reset otp',
      text:`Your Password reset otp ${otp}.Use this otp to proceed with resetting your Password.`,
    }
    await transporter.sendMail(mail)

    return res.json({success:true,message:'Reset Password Otp send'}) 
  } catch (error) {
    return res.json({success:false,message:error.message})
    
  }

}

//reset user password
export const resetPassword= async(req,res)=>{
  const {email,otp,newPassword}=req.body;

  if(!email){
    return res.json({success:false,message:"Invalid email"})
  }
  if(!otp){
    return res.json({success:false,message:"Invalid otp"})
  }
  if(!newPassword){
    return res.json({success:false,message:"Invalid password"})
  }

  

  try {
    const userData = await authModel.findOne({email});
    if(!userData){
      return res.json({success:false,message:"user not found"})
    }

    if(userData.resetOtp===''||userData.resetOtp!==otp){
      return res.json({success:false,message:'Invalid otp'})
    }

    if(userData.resetOtpExpireAt<Date.now()){
      return res.json({success:false,message:'otp expired'})
    }

    const hashedPassword = await bcrypt.hash(newPassword,10);
    userData.password=hashedPassword;
    userData.resetOtp='';
    userData.resetOtpExpireAt=0;
    await userData.save();

    return res.json({success:true,message:"Your Password has been reset success fully"})
    
  } catch (error) {
    return res.json({success:false,message:error.message})
    
  }
}