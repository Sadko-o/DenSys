const mongoose = require("mongoose")
const schema = mongoose.Schema

const patientSchema = new schema({
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
    appointments:[{type: schema.Types.ObjectId, ref: 'Appointment'}],
});

const patientModel = mongoose.model("Patient" , patientSchema );
module.exports = patientModel;

// 1) date of birth
// 2) IIN number
// 3) ID number
// 4) name, surname, middlename
// 6) Blood group
// 7) Emergency Contant Number
// 8) Contant number
// 9) Email (Optional)
// 10) Address
// 11) Marital Status
// 12) Registration Date
// 13) Any other optional details you find neccessary :
//         appointments 