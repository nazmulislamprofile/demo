import express from 'express';
import *as blogController from "../controller/blogController.js"
import *as userController from "../controller/userController.js"
import authMidleware from '../midleware/authMidleware.js';
const router=express.Router();


router.post("/registration",userController.registration)
router.post("/login",userController.Login);
router.get("/readProfile",authMidleware,userController.readProfile)
router.get("/readAllProfiles",authMidleware,userController.readAllProfiles)
router.post("/updateProfile",authMidleware,userController.updateProfile)
router.delete("/deleteProfile/:NIDNumber",authMidleware,userController.deleteProfile)


export default router;