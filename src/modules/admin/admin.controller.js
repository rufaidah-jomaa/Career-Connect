import userModel from "../../../DB/models/User.model.js"

export const getAdmins=async(req,res)=>{
    const Admins = await userModel.find({role:'Admin'})
    return res.status(200).json({message:"success",Admins})
}