const bcrypt=require('bcryptjs')
const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');
const Admin = require('../models/adminModel');

// createPatient
exports.signupPatient = (req, res) => {
    var {dateOfBirth, iin, id, name, surname, blood, emergencyContact, contact, email, address, martialStatus, registrationDate, password}=req.body
    console.log(req.body)
    if(!dateOfBirth || !iin || !id || !name || !surname || !blood || !emergencyContact || !contact || !email || !address || !martialStatus || !registrationDate || !password /*|| !appointments*/){
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
                    dateOfBirth,
                    iin,
                    id,
                    name,
                    surname,
                    blood,
                    emergencyContact,
                    contact,
                    email,
                    address,
                    martialStatus,
                    registrationDate,
                    password: hashedpassword
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
}
// createDoctor
exports.signupDoctor = (req, res) => {
    var {email,password,dateOfBirth, id, iin, name, surname, contact, departmentId, specId, experience, photo, category, price, schedule, address, degree, rating, password}=req.body
    console.log(req.body)
    if(!email || !password || !dateOfBirth || !id || !iin || !name || !surname || !contact || !departmentId 
        || !specId || !experience || !photo || !category || !price || !schedule || !address || !degree || !rating || !password /*|| !appointments*/){
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
                    dateOfBirth,
                    iin,
                    id,
                    name,
                    surname,
                    contact,
                    departmentId,
                    specId,
                    experience,
                    photo,
                    category,
                    price,
                    schedule,
                    address,
                    degree,
                    rating,
                    password: hashedpassword
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
}
// createAdmin
exports.signupAdmin = (req, res) => {
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
}
// createApppointment

// updatePatient
exports.updatePatient = (req, res) => {
    var {email} = req.body
    Patient.findOne({email:email})
    .then(savedUser=>{
        const _id = savedUser._id
        const patient = new Patient({
            _id: _id,
            dateOfBirth: req.body.dateOfBirth,
            iin: req.body.iin ,
            id: req.body.id ,
            name: req.body.name ,
            surname: req.body.surname ,
            middlename: req.body.middlename,
            blood: req.body.blood ,
            emergencyContact: req.body.emergencyContact ,
            contact: req.body.contact ,
            email: req.body.email ,
            address: req.body.address ,
            martialStatus: req.body.martialStatus ,
            registrationDate: req.body.registrationDate,
            password: req.body.password,
            // appointments: req.body.appointments
        });
    Patient.updateOne(savedUser, patient)  
    .then(() => {
        res.status(201).json({
          message: 'Patient updated successfully!'
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

// updateDoctor
exports.updateDoctor = (req, res) => {
    var {email} = req.body
    Doctor.findOne({email:email})
    .then(savedUser=>{
        const _id = savedUser._id
        const doctor = new Doctor({
            _id: _id,
            dateOfBirth: req.body.dateOfBirth,
            iin: req.body.iin ,
            id: req.body.id ,
            name: req.body.name ,
            surname: req.body.surname ,
            middlename: req.body.middlename,
            contact: req.body.contact ,
            departmentId: req.body.departmentId ,
            specId: req.body.specId ,
            experience: req.body.experience ,
            photo: req.body.photo ,
            price: req.body.price ,
            schedule: req.body.schedule ,
            degree: req.body.degree ,
            category: req.body.category ,
            email: req.body.email ,
            address: req.body.address ,
            rating: req.body.rating ,
            homepage: req.body.homepage,
            password: req.body.password,
        // appointments: req.body.appointments
        });
    Doctor.updateOne(savedUser, doctor)  
    .then(() => {
        res.status(201).json({
          message: 'Doctor updated successfully!'
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
// updateAdmin
exports.updateAdmin = (req, res) => {
    var {email} = req.body
    Admin.findOne({email:email})
    .then(savedUser=>{
        console.log(savedUser)
        const _id = savedUser._id
        const admin = new Admin({
            _id: _id,
            email: req.body.email ,
            password: req.body.password
        });
    Admin.updateOne(savedUser, admin)  
    .then(() => {
        res.status(201).json({
          message: 'Admin updated successfully!'
        });
      }
    ).catch(
      (error) => {
        console.log("lol")
        res.status(400).json({
          error: error
        });
      }
    )
    })   
}

// deletePatient
exports.deletePatient = (req, res) => {
    var {email} = req.body
    Patient.findOne({email:email})
    .then(savedUser=>{
        Patient.deleteOne(savedUser)
        .then(() => {
                res.status(200).json({
                    message: 'Patient deleted!'
                });
            })
        .catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    })
}

// deleteDoctor
exports.deleteDoctor = (req, res) => {
    var {email} = req.body
    Doctor.findOne({email:email})
    .then(savedUser=>{
        Doctor.deleteOne(savedUser)
        .then(() => {
                res.status(200).json({
                    message: 'Doctor deleted!'
                });
            })
        .catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    })
}
// deleteAdmin
exports.deleteAdmin = (req, res) => {
    var {email} = req.body
    Admin.findOne({email:email})
    .then(savedUser=>{
        Admin.deleteOne(savedUser)
        .then(() => {
                res.status(200).json({
                    message: 'Admin deleted!'
                });
            })
        .catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    })
}

// "iin": "req.body.iin",
// "id": "req.body.id",
// "name": "req.body.name",
// "surname": "req.body.surname",
// "middlename": "req.body.middlename",
// "blood": "req.body.blood",
// "emergencyContact": "req.body.emergencyContact",
// "contact": "req.body.contact",
// "email": "req.body.email",
// "address": "req.body.address",
// "martialStatus": "req.body.martialStatus",