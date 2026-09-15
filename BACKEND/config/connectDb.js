import mongoose from "mongoose";

 const connectDb=async ()=>{
    try {
       await  mongoose.connect("mongodb://127.0.0.1:27017/studentdb");
        console.log("the server is conencted succesfully")
    } catch (error) {
        console.log("failed to connect the server")
    }
 }
export default connectDb;