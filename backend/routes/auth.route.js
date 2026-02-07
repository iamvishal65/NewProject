const authController=require('../controller/auth.controller.js')
const express=require('express');
const router=express.Router();
const tokenVerification=require('../middlewares/TokenVerificaton.cjs')

router.post('/user/register',authController.Register);
router.post('/user/login',authController.Login);
router.post('/mentor/mentorregister',authController.registerMentor)
router.post('/mentor/mentorlogin',authController.loginMentor)
router.get('/logincheck',tokenVerification, authController.loginCheck)


module.exports=router;