import express from "express";
import { loginService, registerService } from "../controllers/user.controller.js";

const router=express.Router()

router.route('/register').post(registerService) // http://localhost:3000/api/user/register [POST] 
router.route('/login').post(loginService)  // http://localhost:3000/api/user/login [POST] 

export default router