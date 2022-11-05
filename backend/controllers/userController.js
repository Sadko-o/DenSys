const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const JWT_SECRET =process.env.JWT_SECRET
const {auth} = require("../middleware/authorization")
const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');
const Admin = require('../models/adminModel');

exports.loginDoctor = (req, res) => {
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
}

exports.loginPatient = (req, res) => {
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
}

exports.loginAdmin = (req, res) => {
    var {email, password} = req.body
    if (!email || !password) {
        return res.status(422).json({error:"Plase add email or password"})
    }
    Admin.findOne({email:email})
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
}