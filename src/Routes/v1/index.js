const express=require('express');

const router=express.Router();



const UserController=require('../../controllers/user_controller.js');

const {AuthRequestValidator}=require('../../middlewares/index.js')


router.post('/signup',AuthRequestValidator.validateUserAuth,UserController.create)
router.post('/signin',AuthRequestValidator.validateUserAuth,UserController.signIn)

module.exports=router