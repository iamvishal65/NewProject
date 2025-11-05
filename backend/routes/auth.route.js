const authController=require('../controller/auth.controller')
const express=require('express');
const router=express.Router();

router.post('/user/register',authController.Register);
router.post('/user/login',authController.Login);
router.post('/mentor/mentorregister',authController.registerMentor)
router.post('/mentor/mentorlogin',authController.loginMentor)


module.exports=router;