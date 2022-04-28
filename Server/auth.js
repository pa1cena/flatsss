const express=require('express')
const app=express()
const router=express.Router()
const User=require('./userSchema')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
app.post('/register',async (req,res)=>{ 
try{
    const {firstname,lastname,mobile,email,password,t}=req.body
    if(!firstname || !lastname || !mobile || !email || !password){
        console.log(`enter the complete data`)
        return res.status(400).json({
            msg: "enter complete data"
        });
    }
    const userExist=await User.findOne({email:email})
    if(userExist){
    //    
    return res.status(400).json({
        msg: "User Already Exists"
    });
        // return res.send('enter correct details')
    }
    const user=new User({firstname,lastname,mobile,email,password,t})
    await user.save()
    return res.status(201).json({'message':'user registered successfully'})
}
catch(error){
    // res.status(422).send('enter correct details')
    console.log(error)
}

})
//login route
app.post('/signin',async (req,res)=>{
try{
    let token
    const {email,password}=req.body
    if(!email || !password){
        console.log(`enter the complete data`)
        return res.status(400).json({
            msg: "enter complete data"
        });
    }
    const userLogin=await User.findOne({email:email})  
    const match=await bcrypt.compare(password,userLogin.password)
    if(match && userLogin) 
    {
    //     token=await userLogin.generateAuthToken()
    //  res.cookie('jwtoken',token,{
    //      expires:new Date(Date.now()+25892000000),httpOnly:true,
    //  })
    return res.status(201).json({
        msg: "login success"
    });
    }
    else{
    return res.status(400).json({
        msg: "enter correct data"
    });}
//     else{
//     return res.status(400).json({
//         msg: "enter valid data"
// });
//     }
 }
catch(error){
    // res.status(400).send('enter correct details')
    console.log(error)
}

})
module.exports=[app,router]