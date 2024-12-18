import express from 'express';
import *as blogController from "../controller/blogController.js"
import *as userController from "../controller/userController.js"
const router=express.Router();


router.post("/registration",userController.registration)
router.post("/login",userController.Login);
router.get("/profile",userController.profile)

export default router;