import UsersModel from "../model/usersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";

export const registration=async(req,res)=>{
    try {
        let reqBody=req.body;
        let data=await UsersModel.create(reqBody);
        return  res.json({message:"registration successfull",data:data});
    } catch (err) {
        return res.json({status:"fail","Message":err.toString()})
    }  
  }

  export const Login=async(req,res)=>{

    try {
        let reqBody=req.body;
        let data=await UsersModel.findOne(reqBody)
        if(data===null){
            return res.json({status:"fail","Message":"User not found"})
        }
        else {
            // Login Success Token Encode
            let token=TokenEncode(data['NIDNumber'],data['password'])

            return res.json({status:"success",token:token,"Message":"User Login successfully"})
        }

    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }

}
