
import 'dotenv/config'
import { authModel } from '../model/authModel.js';

export const getUserData=async(req,res)=>{
  try {
    const userId = req.userId;
    const userData=await authModel.findById(userId);
    res.json(
      {
        success:true,
        message:{
          name:{name:userData.name,isAccountVerified:userData.isAccountVerified}
        }
      })
    
  } catch (error) {
    return res.json({success:false,message:error.message})
    
  }
}