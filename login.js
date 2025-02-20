const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3001 , ()=>console.log("Server start on port 3001"));

mongoose.connect("mongodb+srv://dhinesh:dhinesh@cluster0.z09pv.mongodb.net/bank").then(()=>console.log("DataBase Connected...")).catch((err)=>console.log(err));


// Schema

let data = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String
})

let Data = mongoose.model("detail",data);

// let data1 = new Data({
//     fname:"Dhinesh",
//     lname:"waran",
//     email:"dhinesh@gmail.com",
//     password:"12345"
// })
// data1.save();




app.post('/register' , (req , res)=>{
    Data.create(req.body).then((item)=>res.send(item)).catch((err)=>console.log(err))
})

app.get('/login' , (req , res)=>{
    Data.find().then((item)=>res.send(item)).catch((err)=>console.log(err))
})

