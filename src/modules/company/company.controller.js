import companyModel from "../../../DB/models/Company.model.js"
import { AppError } from "../../services/AppError.js"
import cloudinary from "../../services/cloudinary.js"

export const getCompanies = async(req,res,next)=>{
    const companies = await companyModel.find({})
    return res.status(201).json({message:"success",companies})
}
export const createCompany = async(req,res,next)=>{
    const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,
        {folder:`${process.env.App_Name}/company`})
    req.body.logo= {secure_url,public_id} 
    const company = await companyModel.create(req.body)
    return res.status(201).json({message:"success",company})
}
export const updateCompany = async(req,res,next)=>{
    const company = await companyModel.findById(req.body.params)
    if(!company){ 
        return next(new AppError('company not found',404))
    }
    company.companyName=req.body.companyName
    company.description=req.body.description
    company.logo=req.body.logo
    company.email=req.body.email
    company.phone=req.body.phone
    company.website_url=req.body.website_url
    company.industry=req.body.industry
    company.address=req.body.address
   
    if(req.file){
        const {secure_url,public_id}= await cloudinary.uploader.upload(req.file.path,
            {folder:`${process.env.App_Name}/company`})
        await cloudinary.uploader.destroy(company.image.public_id)
        company.image = {secure_url,public_id}
    }
    company.save()
  //  const updatedCompany = await companyModel.findByIdAndUpdate(req.params.id,req.body)//
    return res.status(201).json({message:"success",company})
}
export const deleteCompany= async(req,res,next)=>{
    const company = await companyModel.findByIdAndDelete(req.params.id)
    if(!company){
        return next(new AppError('company not found',404))
    }
    return res.status(201).json({message:"success",company})
}