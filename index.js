var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

app.use(cors());
app.use(express.json());

app.get('/' , function(req , res){
    res.send('Hello World');
})


app.listen(3002 , ()=>{
    console.log("server run on port 3002");
});

mongoose.connect('mongodb+srv://dhinesh:dhinesh@cluster0.z09pv.mongodb.net/bank').then(()=>{console.log("Databases connected...")}).catch((err)=>{console.log(err)})


// schema
let data = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount : Number
})



// model

let Data = mongoose.model("test",data);

// let data1=new Data({
//     name:"Dinesh",
//     email:"dinesh@gmail.com",
//     password:"1234",
//     amount:1000
// })
// data1.save()


// API fetch data

app.get('/data' , (req , res)=>{
    Data.find().then((item)=>res.send(item));   // all data fetch the find()
})



app.post('/create' , (req , res)=>{
    Data.create(req.body).then((item)=>res.send(item)).catch((err)=>console.log(err))
})

app.delete('/delete' , (req , res)=>Data.deleteOne({}))