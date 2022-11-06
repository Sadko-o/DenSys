const mongoose = require('mongoose')
// const schema = mongoose.Schema

const doctorSchema = new mongoose.Schema({
    dateOfBirth: {type: String, required :true }, 
    iin: {type: String, required :true }, 
    id: {type: String, required :true }, 
    name: {type: String, required :true },
    surname: {type: String, required :true }, 
    middlename: {type: String}, 
    contact: {type: String, required :true },
    departmentId: {type: String, required :true }, 
    specId: {type: String, required :true },
    experience: {type: String, required :true },
    photo: {type: String, required :true },
    category: {type: String, required :true },
    price: {type: Number, required :true },
    schedule: {type: String, required :true },
    address: {type: String, required :true },
    degree: {type: String, required :true },
    rating: {type: Number, required :true },
    homepage: {type: String, required :false },
    password: {type: String, required :true },
    appointments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Appointment'}]
});

module.exports = mongoose.model("Doctor", doctorSchema);