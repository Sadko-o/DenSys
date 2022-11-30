const mongoose = require('mongoose')
// const schema = mongoose.Schema

const appointmentSchema = new mongoose.Schema({
    id: {type: String, required :true },
    day: {type: String, required :true },
    time: {type: String, required :true },
    doctorId: {type: String, required :true },
    patientId: {type: String, required :true },
    approveStatus: {type: String, required :true }
});

module.exports = mongoose.model("Appointment", appointmentSchema);