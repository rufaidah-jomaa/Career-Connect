import mongoose, { Schema, model } from 'mongoose'
const companySchema = new Schema ({
    companyName:{
     type:String,
     required:true
    },
    description:{
    type:String,
    required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    logo:{
        type: Object
    },
    phone:{
        type:String,
        required:true,
    },
    industry:{
        type:String,
        required:true
    },
    website_url:{
     type:String
    },
    location:{
        type:String
    },
    founded:{ //The year the company was founded.
        type:Date
    },
   
},
   {
    timestamps:true
   }
)
const companyModel = model('Company',companySchema);
export default companyModel;