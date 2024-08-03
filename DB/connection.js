import mongoose from 'mongoose';

 const connectDB = async()=>{
     mongoose.connect(process.env.DB)
 .then(() => console.log('Connected!'))
 .catch( (err)=>{ // err:cb function
    console.log(`error to connect DB : ${err.message}`)
 })
 }
 export default connectDB;