const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');
const bcrypt=require('bcryptjs');
const Appointment = require('../models/appointmentModel');

exports.getAllAppointments = (req, res) => {
    Appointment.find()
    .then(appointments=>{
        res.json({appointments})
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.updateAppointment = (req, res) => {
    var {id} = req.body
    Appointment.findOne({id:id})
    .then(savedUser=>{
        const appointment = new Appointment({
            _id: id,
            day: savedUser.day,
            time: savedUser.time,
            doctorId: savedUser.doctorId,
            patientId: savedUser.patientId,
            approveStatus: approveStatus
        });
    Appointment.updateOne(savedUser, appointment)
    .then(() => {
        res.status(201).json({
          message: 'Appointment updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    )
    })
}

exports.deleteAppointment = (req, res) => {
    var {id} = req.body
    Appointment.findOne({id:id})    
    .then(savedUser=>{
        Appointment.deleteOne(savedUser)
        .then(() => {
                res.status(200).json({
                    message: 'Appointment deleted!'
                });
            })
        .catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        )
    })
}

exports.createAppointment = (req, res) => {
    var {id, day, time, doctorId, patientId, approveStatus} = req.body
    console.log(req.body)
    // res.json({message:"saved successfully"})
    
    Appointment.findOne({doctorId:doctorId, day:day, time:time})
    .then(savedUser=>{
        if(savedUser){
            return res.status(422).json({error:"Appointment already exists"})
        }
        const appointment = new Appointment({
            id,
            day,
            time,
            doctorId,
            patientId,
            approveStatus
        });
        appointment.save()
        .then(user=>{
            res.json({message:"Appointment created successfully"})
        })
        .catch(err=>{
            console.log(err)
        })
    }) 
}