import express from'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import { Student } from './Model/student.js';

dotenv.config()
connectDb()
const port= process.env.PORT||3000;
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post('/login',async (req,res)=>{
const {
    firstname,
    middlename,
    lastname,
    stream,
    gender,
    email,
    phone,
    gurdianphone
} = req.body;
try {
    let std=await Student.insertOne({
 firstname,
    middlename,
    lastname,
    stream,
    gender,
    email,
    phone,
    gurdianphone

});
res.send(200).json(std);
} catch (error) {
    res.send(500).json({error:error.message});
}


})



app.listen(port,()=>{
    console.log("the server is listening on port",port)
})