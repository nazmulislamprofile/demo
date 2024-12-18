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

export const readProfile=async(req,res)=>{
    try {
        let NIDNumber=req.headers['NIDNumber'];
        let data=await UsersModel.findOne({"NIDNumber":NIDNumber})
        return res.json({status:"success","Message":"User ProfileDetails successfully",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}

export const readAllProfiles = async (req, res) => {
    try {
        let data = await UsersModel.find();
        return res.json({ status: "success", message: "All User Profiles retrieved successfully", data: data });
    } catch (err) {
        return res.json({ status: "fail", message: err.toString() });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const reqBody = req.body; // Data to update
        const NIDNumber = req.headers['NIDNumber']; // NIDNumber from headers

        // Validate NIDNumber
        if (!NIDNumber) {
            return res.status(400).json({ status: "fail", message: "NIDNumber is required in the headers" });
        }

        // Perform the update
        const result = await UsersModel.updateOne(
            { NIDNumber: NIDNumber }, // Filter by NIDNumber
            { $set: reqBody } // Update fields specified in reqBody
        );

        // Check if a document was matched and updated
        if (result.matchedCount === 0) {
            return res.status(404).json({ status: "fail", message: "User with the given NIDNumber not found" });
        }

        return res.json({
            status: "success",
            message: "User profile updated successfully",
            data: result,
        });
    } catch (err) {
        return res.status(500).json({ status: "fail", message: err.toString() });
    }
};


export const deleteProfile = async (req, res) => {
    try {
        const { NIDNumber } = req.params; // Extract NIDNumber from URL params

        // Validate NIDNumber
        if (!NIDNumber) {
            return res.status(400).json({ status: "fail", message: "NIDNumber parameter is required" });
        }

        // Perform the delete operation
        const result = await UsersModel.deleteOne({ NIDNumber: NIDNumber });

        // Check if a user was deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ status: "fail", message: "User with the given NIDNumber not found" });
        }

        return res.json({
            status: "success",
            message: "User profile deleted successfully",
            data: result,
        });
    } catch (err) {
        return res.status(500).json({ status: "fail", message: err.toString() });
    }
};
