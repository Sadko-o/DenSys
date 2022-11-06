const mongoose = require('mongoose')
// const schema = mongoose.Schema

const patientSchema = new mongoose.Schema({
    dateOfBirth: {type: String, required :true }, 
    iin: {type: String, required :true }, 
    id: {type: String, required :true }, 
    name: {type: String, required :true },
    surname: {type: String, required :true }, 
    middlename: {type: String}, 
    blood: {type: String, required :true }, 
    emergencyContact: {type: String, required :true }, 
    contact: {type: String, required :true }, 
    email: {type: String, required :true },
    address: {type: String, required :true },
    martialStatus: {type: String, required :true }, 
    registrationDate: {type: String, required :true },
    password: {type: String, required :true },
    appointments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Appointment'}]
});

module.exports = mongoose.model("Patient", patientSchema);