const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const mongoose = require('mongoose')
const Admin=mongoose.model("Admin")
const Doctor=mongoose.model("Doctor")
const Patient=mongoose.model("Patient")

module.exports=(req, res, next) => {
    console.log(req.headers)
    const {authorization} = req.headers
    if (!authorization){
        return res.status(401).json({error:"You must be logged in"})
    }
    const token = authorization.replace("Bearer ", "")
    console.log(token)
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({error:"You must be logged in"})
        }
        const {_id} = payload
        Admin.findById(_id).then(userdata=>{
            req.user=userdata
            next()
        })
        Doctor.findById(_id).then(userdata=>{
            req.user=userdata
            next()
        })
        Patient.findById(_id).then(userdata=>{
            req.user=userdata
            next()
        })
    })
}