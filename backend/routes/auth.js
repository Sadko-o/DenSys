const express=require('express');
const router=express.Router();
const mongoose=require("mongoose")
const Admin=mongoose.model("Admin")
const Doctor=mongoose.model("Doctor")
const Patient=mongoose.model("Patient")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const JWT_SECRET =process.env.JWT_SECRET
const {auth} = require("../middleware/login")
const userController = require("../controllers/userController")

// router.post('/loginDoctor', userController.loginDoctor)
router.post('/loginDoctor', (req, res) => {
    var {email, password} = req.body
    if (!email || !password) {
        return res.status(422).json({error:"Plase add email or password"})
    }
    Doctor.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET, {
                    expiresIn: "3h"
                })
                res.json({token:token,
                        message:"Successfully signed in"
                })
            }
            else{
                return res.status(422).json({error:"Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

router.post('/loginPatient', (req, res) => {
    var {email, password} = req.body
    if (!email || !password) {
        return res.status(422).json({error:"Plase add email or password"})
    }
    Patient.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET, {
                    expiresIn: "3h"
                })
                res.json({token:token,
                        message:"Successfully signed in"
                })
            }
            else{
                return res.status(422).json({error:"Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

router.post('/loginAdmin', async (req, res) => {
    var {email, password} = req.body
    if (!email || !password) {
        return res.status(422).json({error:"Plase add email or password"})
    }
    const admin = await Admin.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET, {
                    expiresIn: "3h"
                })
                res.json({token:token,
                        message:"Successfully signed in"
                })
            }
            else{
                return res.status(422).json({error:"Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})



router.post('/signupAdmin',(req,res)=>{
        var {name,email,password}=req.body
        console.log(req.body)
        if(!email || !password || !name){
                return res.status(422).json({error:"please add all the fields"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            Admin.findOne({email})
            .then((savedUser)=>{
                    if(savedUser){
                        return res.status(422).json({error:"User already exists with that email"})
                    }
                    const user=new Admin({
                        email,
                        password: hashedpassword,
                        name
                    })
                    user.save()
                    .then(user=>{
                        res.json({message:"saved successfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            })
            .catch(err=>{
                    console.log(err)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    })

router.post('/signupDoctor',(req,res)=>{
    var {name,email,password}=req.body
    console.log(req.body)
    if(!email || !password || !dateOfBirth || !id || !iin || !name || !surname || !contact || !departmentId 
        || !specId || !experience || !photo || !category || !price || !schedule || !address || !degree || !rating || !password || !appointments){
            return res.status(422).json({error:"please add all the fields"})
    }
    bcrypt.hash(password,12)
    .then(hashedpassword=>{
        Doctor.findOne({email})
        .then((savedUser)=>{
                if(savedUser){
                    return res.status(422).json({error:"User already exists with that email"})
                }
                const user=new Doctor({
                    email,
                    password: hashedpassword,
                    name
                })
                user.save()
                .then(user=>{
                    res.json({message:"saved successfully"})
                })
                .catch(err=>{
                    console.log(err)
                })
        })
        .catch(err=>{
                console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/signupPatient',(req,res)=>{
    var {name,email,password}=req.body
    console.log(req.body)
    if(!dateOfBirth || !iin || !id || !name || !surname || !blood || !emergencyContact || !contact || !email || !address || !martialStatus || !registrationDate || !password || !appointments){
            return res.status(422).json({error:"please add all the fields"})
    }
    bcrypt.hash(password,12)
    .then(hashedpassword=>{
        Patient.findOne({email})
        .then((savedUser)=>{
                if(savedUser){
                    return res.status(422).json({error:"User already exists with that email"})
                }
                const user=new Patient({
                    email,
                    password: hashedpassword,
                    name
                })
                user.save()
                .then(user=>{
                    res.json({message:"saved successfully"})
                })
                .catch(err=>{
                    console.log(err)
                })
        })
        .catch(err=>{
                console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

// const login = app.use

// router.get('/protected',auth,(req,res)=>{
//     res.send("hello user")
// })

module.exports=router