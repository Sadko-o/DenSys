const mongoose = require('mongoose')
// const schema = mongoose.Schema

const appointmentSchema = new mongoose.Schema({
    day: {type: String, required :true },
    time: {type: String, required :true },
    doctorEmail: {type: String, required :true },
    patientEmail: {type: String, required :true },
    approveStatus: {type: String, required :true },
    doctorName: {type: String, required :true },
    doctorSurname: {type: String, required :true },
    patientName: {type: String, required :true },
    patientSurname: {type: String, required :true },
    patientContact: {type: String, required :true }
});

module.exports = mongoose.model("Appointment", appointmentSchema);