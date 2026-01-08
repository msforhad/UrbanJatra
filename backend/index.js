import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongoDb.js';
import authRouter from './routes/authRoutes.js';
import { userRouter } from './routes/userRoutes.js';


//mongodb connect
const app = express();
const port=process.env.PORT || 4000
connectDB();

//dependency connect
app.use(express.json());
app.use(cookieParser());

//api endpoints
app.get('/',(req,res)=>res.send('UrbanJatra.com'));
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

//server connect
app.listen(port,()=>console.log(`Server started on PORT :${port}`));
