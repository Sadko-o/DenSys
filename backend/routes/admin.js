const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const appointmentController = require("../controllers/appointmentController");
const dashboard = require("../controllers/dashboard");

router.post("/admin", adminController.signupAdmin);
router.post("/doctor", adminController.signupDoctor);
router.post("/patient", adminController.signupPatient);
router.post("/appointment", appointmentController.createAppointment);

router.put('/patient', adminController.updatePatient)
router.put('/doctor', adminController.updateDoctor)
router.put('/admin', adminController.updateAdmin)
router.put('/appointment', appointmentController.updateAppointment)

router.get('/patient', dashboard.getAllPatients)
router.get('/doctor', dashboard.getAllDoctors)
router.get('/appointment', appointmentController.getAppointment)

router.delete('/patient', adminController.deletePatient)
router.delete('/admin', adminController.deleteAdmin)
router.delete('/doctor', adminController.deleteDoctor)
router.delete('/appointment', appointmentController.deleteAppointment)
module.exports=router