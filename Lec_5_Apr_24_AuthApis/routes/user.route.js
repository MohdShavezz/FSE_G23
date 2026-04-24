import express from "express";
import { forgotPassword, loginService, registerService,resetPassword } from "../controllers/user.controller.js";

const router=express.Router()

router.route('/register').post(registerService) // http://localhost:3000/api/user/register [POST] 
router.route('/login').post(loginService)  // http://localhost:3000/api/user/login [POST] 
router.route('/forgot-password').post(forgotPassword)  // http://localhost:3000/api/user/forgot-password [POST] 
router.route('/reset-password').post(resetPassword)  // http://localhost:3000/api/user/reset-password [POST] 

export default router