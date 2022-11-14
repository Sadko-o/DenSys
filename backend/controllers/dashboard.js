const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');

exports.getAllPatients = (req, res) => {
    Patient.find()
    .then(patients=>{
        res.json({patients})
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getAllDoctors = (req, res) => {
    Doctor.find()
    .then(doctors=>{
        res.json({doctors})
    })
    .catch(err=>{
        console.log(err)
    })
}