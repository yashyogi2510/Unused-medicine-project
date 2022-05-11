const express= require("express")
const cors =require("cors")
const bodyparser=require("body-parser")
const multer =require("multer")
var fs = require('fs');
const path = require('path');
const jwt=require('jsonwebtoken');
const SK="Deep2323";
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app=express();
const Mongoclient =require('mongodb').MongoClient;
const bodyParser = require("body-parser");
// const bodyParser = require("body-parser");


  // CONNECTION OF MONGOOSE DATA BASEC TO THE SERVER
  const{ObjectId}=require('mongodb')
  const MongoClient =require('mongodb').MongoClient;
const console = require('console');
  let client=new MongoClient(
      "mongodb://localhost:27017/digical",
      {useNewUrlParser:true, useUnifiedTopology: true}
  );
  
  let mddbconn;
  client.connect((err,db)=>{
  if(!err)
  {
      mydb=db;
      console.log("connected")
  }
  else{
      console.log("db could not be connected");
  }
  });
app .use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())

//connecting to a file system to upload the image
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Userimage/')
    },
    filename: function (req, file, cb) {
      console.log("Llllllllllllllllllllllllllllll")
      console.log(file)
      cb(null, "temp.jpg")
    }
      
    })


var upload = multer({ storage: storage })
app.use(express.static(__dirname + '/Userimage'))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//routes ARE THERE
// 1:Login OF ALL THE USER
app.post('/login',bodyParser.json(),(req,res)=>{
     console.log(req.body)
   const{email,password}=req.body;
   if(!email || !password) return res.status(422)
   
   let search=mydb.db('medihelp').collection('users');
   search.find({email:email}).toArray((err,docs)=>{
       if(!err && docs.length>0){
         console.log(docs)
          bcrypt.compare(password, docs[0].password, function(err, result) {
             if(result){
               console.log(docs[0]._id)
               const user={
                 id:docs[0]._id,
               }
               jwt.sign({user},SK,(err,token)=>{
                 if(!err){
                 // {res.status(200).json({token})
                   res.send({status:"ok",token:token,docs:docs})  
               }
                 else{res.status(402)}
               })
              
           
             }
             else{
               res.send({status:"401"}) 
           }
       
         });
              
         
       }
       else{
         res.send({status:"sry",message:"please enter write info"})
       }    })
  })
  // 2:Signup Routes TO THE USER
  app.post('/signup', upload.array('file'), (req, res)=>{
    console.log(req.body); 
   const {email,password} =req.body 
   bcrypt.hash(password, saltRounds, function(err, hash) {
       if(!err){
           req.body.password=hash
           let user=mydb.db('medihelp').collection('users');
           user.find({email:email}).toArray((err,docs)=>{
           console.log("in find")
               if(!err && docs.length>0){
                   res.json({
                       status:"300",
                       message:"USER ALREADY EXISTS"
                   });
               }
               else {
                   user.insertOne(req.body,(err,r)=>{
                       console.log("in insert")
                       if(!err){ 
                           fs.renameSync('./Userimage/temp.jpg', './Userimage/' + r.insertedId+'.jpg');
                           // res.send({ msg: "imge sucessfully inserted", status: 'OK', description: 'img detail created and file uploaded' });
                     
                         res.send({status:"ok"})
                           
                       
  
                           
                       }
                       else{
                           res.json({
                               status:"401"
                           })
                       }
                   })
               }
               
           })
         }
   });
   })
  
  // End of all signup

//   User api
app.post ("/user" ,bodyParser.json(),(req,res)=>{
    console.log(req.body)
    let a=mdb.db("medihelp").collection("userdata")
    a.insertOne(req.body,(err,r)=>{
        if(!err){
            res.send("ok")
        }
        else{
            res.send("fail")
        }
    })
})



// end of user api
  // Send User
  app.get('/senduser', (req, res) => {
  
    const collection = mydb.db('medihelp').collection('users');
  
    collection.find().toArray(function (err, docs) {
      // console.log(docs)
      
        res.send(docs);
    });
  
  })
  // starorer all medicine which are din eted by the users
  app.post('/donate', upload.array('file'),(req,res)=>{
    console.log(req.body)
    let appoinment=mydb.db('medihelp').collection('medicine-donate');
  appoinment.insertOne(req.body,(err,r)=>{
    if(!err){
      fs.renameSync('./Userimage/temp.jpg', './Userimage/' + r.insertedId+'.jpg');
      res.send({status:"ok"})
    }
    else res.send({status:"sorry"})
  })
  
  })

  app.get('/senddonated-medicine', (req, res) => {
  
    const collection = mydb.db('medihelp').collection('medicine-donate');
  
    collection.find().toArray(function (err, docs) {
      // console.log(docs)
      
        res.send(docs);
    });
  
  })
  // store all the requst medicine
  app.post('/request-medicine', upload.array('file'),(req,res)=>{
    console.log(req.body)
    let appoinment=mydb.db('medihelp').collection('medicine-request');
  appoinment.insertOne(req.body,(err,r)=>{
    if(!err){
      fs.renameSync('./Userimage/temp.jpg', './Userimage/' + r.insertedId+'.jpg');
      res.send({status:"ok"})
    }
    else res.send({status:"sorry"})
  })
  
  })
  app.get('/sendrequest-medicine', (req, res) => {
  
    const collection = mydb.db('medihelp').collection('medicine-request');
  
    collection.find().toArray(function (err, docs) {
      // console.log(docs)
      
        res.send(docs);
    });
  
  })
  
// ++++++++++++++++++++++===============================================

app.listen(80,()=>{
    console.log("server 80 is ready")
})
