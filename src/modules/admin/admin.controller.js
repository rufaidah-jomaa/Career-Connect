import userModel from "../../../DB/models/User.model.js"

export const getAdmins=async(req,res)=>{
    const Admins = await userModel.find({role:'Admin'})
    return res.status(200).json({message:"success",Admins})
}
export const blockAdmin = async (req, res,next) => {
    const user = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: "Blocked",
      },
      { new: true }
    ).select('userName status')
    if (!user) {
      return next(new AppError("user not found",404))
    }
    return res.json({ message: "success", user });
  };
  
  export const unBlockAdmin = async (req, res,next) => {
    const user = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: "Active",
      },
      { new: true }
    ).select('userName status')
    if (!user) {
      return next(new AppError("user not found",404))
    }
    return res.json({ message: "success", user });
  };
  export const addAdmin = async (req, res,next) => {
    const user = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        role: "Admin",
      },
      { new: true }
    ).select('userName role')
    if (!user) {
      
      return next(new AppError("user not found",404))
    }
    return res.json({ message: "success", user });
  };
  
  export const removeAdmin = async (req, res,next) => {
    const user = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        role: "Job-Seeker",
      },
      { new: true }
    ).select('userName role')
    if (!user) {
      return next(new AppError("user not found",404))
    }
    return res.json({ message: "success", user });
  };
  