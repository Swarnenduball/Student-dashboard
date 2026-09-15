import mongoose from "mongoose";

let stdSchema= new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        length:15
    },
     middlename:{
        type:String,
      
        length:15
    },
    lastname:{
        type:String,
        require:true,
        length:15
    },
    stream:{
        type:String,
        require:true,
        enum:['computer science','computer application','accounts']
    },
    gender: {
    type: String,
    require:true,
    enum: ['male', 'female', 'other']
},
 email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    gurdianphone: {
        type: String,
       
      
    },
})
 export let Student=new mongoose.model('student',stdSchema);