const express=require('express');
const router=express.Router();
const tokenVerification=require('../middlewares/TokenVerificaton.cjs')
const projectRoute=require('../controller/Project')

router.post('/user/create',tokenVerification,projectRoute.createProject)
router.get('/user/projectById',tokenVerification,projectRoute.singleProject)
router.get('/user/allProject',tokenVerification,projectRoute.accessAllProject)
router.delete('/user/delete/:id',tokenVerification,projectRoute.deleteProject)

module.exports=router;