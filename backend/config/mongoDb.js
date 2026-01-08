import mongoose from "mongoose";

const connectDB = async()=>{
  mongoose.connection.on('connected',()=>console.log('db was connection'))

  await mongoose.connect(`${process.env.DB_URL}`)
}

export default connectDB;