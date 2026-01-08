import express from 'express'
import { emailVerifyOtp, isAuthenticated, login, logout, passwordResetOtp, register, resetPassword, verifyEmail } from '../controllers/authController.js';

 const authRouter = express.Router();


authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/email-verify-otp',emailVerifyOtp);
authRouter.post('/verify-email',verifyEmail);
authRouter.post('/is-authenticated',isAuthenticated);
authRouter.post('/password-reset-otp',passwordResetOtp);
authRouter.post('/reset-password',resetPassword);
 export default authRouter;