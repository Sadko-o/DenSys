const express=require('express');
const router=express.Router();
const adminController = require("../controllers/adminController")
const appointmentController = require("../controllers/appointmentController")
const dashboard = require("../controllers/dashboard")

router.post('/signupAdmin', adminController.signupAdmin)
router.post('/signupDoctor', adminController.signupDoctor)
router.post('/signupPatient', adminController.signupPatient)
router.post('/createAppointment', appointmentController.createAppointment)

router.put('/updatePatient', adminController.updatePatient)
router.put('/updateDoctor', adminController.updateDoctor)
router.put('/updateAdmin', adminController.updateAdmin)
router.put('/updateAppointment', appointmentController.updateAppointment)

router.get('/getAllPatients', dashboard.getAllPatients)
router.get('/getAllDoctors', dashboard.getAllDoctors)
router.get('/getAllAppointments', appointmentController.getAllAppointments)

router.delete('/deletePatient', adminController.deletePatient)
router.delete('/deleteAdmin', adminController.deleteAdmin)
router.delete('/deleteDoctor', adminController.deleteDoctor)
router.delete('/deleteAppointment', appointmentController.deleteAppointment)
module.exports=router