import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        NIDNumber: {type: String, unique: true, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        password: {type: String, required: true},
        bloodGroup:{type: String, default: 0},
    },
    { timestamps: true , versionKey: false}
)

const UsersModel = mongoose.model("users", userSchema);
export default UsersModel