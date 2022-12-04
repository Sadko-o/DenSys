const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');

exports.getAllPatients = (req, res) => {
    var {email} = req.body
    if (email != '') {
        Patient.find({email:email})
        .then(savedUser=>{
            res.json({savedUser})
        })
    }
    else {
        Patient.find()
        .then(patients=>{
            res.json({patients})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.getAllDoctors = (req, res) => {
    var {email} = req.body
    if (email != '') {
        Doctor.find({email:email})
        .then(savedUser=>{
            res.json({savedUser})
        })
    }
    else {
        Doctor.find()
        .then(doctors=>{
            res.json({doctors})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}