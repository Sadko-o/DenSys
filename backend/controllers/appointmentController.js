const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');
const Appointment = require('../models/appointmentModel');


exports.getAppointment = (req, res) => {
    var {doctorEmail, patientEmail} = req.body
    if (!doctorEmail && !patientEmail) {
        Appointment.find()
        .then(appointments=>{
            res.json({appointments})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    else if (doctorEmail) {
        Appointment.find({doctorEmail:doctorEmail})
        .then(savedUser=>{
            res.json({savedUser})
        })
    }
    else if (patientEmail) {
        Appointment.find({patientEmail:patientEmail})
        .then(savedUser=>{
            res.json({savedUser})
        })
    }
}

exports.updateAppointment = (req, res) => {
    var {id, day, time, doctorEmail, patientEmail, approveStatus} = req.body
    console.log(req.body)

    // res.json({message:"saved successfully"})
    
    Appointment.findOne({doctorEmail:doctorEmail, day:day, time:time})
    .then(savedUser=>{
        const _id = savedUser._id
        const appointment = new Appointment({
            _id: _id,
            id: req.body.id,
            day: req.body.day,
            time: req.body.time,
            doctorEmail: req.body.doctorEmail,
            patientEmail: req.body.patientEmail,
            approveStatus: req.body.approveStatus
        });
    Appointment.updateOne(savedUser, appointment)
    .then(() => {
        if (req.body.approveStatus == "Rejected") {
            Doctor.findOne({email:doctorEmail})
            .then(savedUser=>{
                const newUser = new Doctor(savedUser)
                newUser.appointments[day][time] = 0
                console.log(newUser)
                Doctor.updateOne(savedUser, newUser)
                .then(() => {
                    console.log('Doctor updated successfully!')
                }).catch(
                (error) => {
                   console.error(error)
                })
            })
        }
        res.status(201).json({
          message: 'Appointment updated successfully!'
        });
      }
    ).catch(
      (error) => {
        console.log("lolkek")
        res.status(400).json({
          error: error
        });
      }
    )
    })
}

exports.deleteAppointment = (req, res) => {
    var {day, time, doctorEmail} = req.body
    Appointment.findOne({doctorEmail:doctorEmail, day:day, time:time})    
    .then(savedUser=>{
        Appointment.deleteOne(savedUser)
        .then(() => {
            Doctor.findOne({email:doctorEmail})
            .then(savedUser=>{
                const newUser = new Doctor(savedUser)
                newUser.appointments[day][time] = 0
                console.log(newUser)
                Doctor.updateOne(savedUser, newUser)
                .then(() => {
                    console.log('Doctor updated successfully!')
                }).catch(
                (error) => {
                   console.error(error)
                })
            })
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
    var {day, time, doctorEmail, patientEmail, approveStatus, doctorName, patientName, doctorSurname, patientSurname, patientContact} = req.body
    console.log(req.body)
    Appointment.findOne({doctorEmail:doctorEmail, day:day, time:time})
    .then(savedUser=>{
        if(savedUser){
            throw new Error('Appointment already exists');
            // return res.status(422).json({error:"Appointment already exists"})
        }
        const appointment = new Appointment({
            day,
            time,
            doctorEmail,
            patientEmail,
            approveStatus,
            doctorName,
            patientName,
            patientSurname,
            doctorSurname,
            patientContact
        });
        appointment.save()
        .then(user=>{
            Doctor.findOne({email:doctorEmail}) 
            .then(savedUser=>{
                var proc = savedUser.procedure
                const newUser = new Doctor(savedUser)
                newUser.appointments[day][time] = 1
                Doctor.updateOne(savedUser, newUser)
                .then(() => {
                    console.log('Doctor updated successfully!')
                }).catch(
                (error) => {
                   console.error(error)
                })
                Patient.updateOne(
                    {email:patientEmail},
                    {$push: {procedures: proc}}
                )
                .then(() => {
                    console.log('Patient updated successfully!')
                }).catch((error) => {console.error(error)})
            })
            
            
            res.json({message:"Appointment created successfully"})
        })
        .catch(err=>{
            console.log(err)
        })
    }) 
}
