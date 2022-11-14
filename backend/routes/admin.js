const express=require('express');
const router=express.Router();
const adminController = require("../controllers/adminController")
const dashboard = require("../controllers/dashboard")

router.post('/signupAdmin', adminController.signupAdmin)
router.post('/signupDoctor', adminController.signupDoctor)
router.post('/signupPatient', adminController.signupPatient)

router.put('/updatePatient', adminController.updatePatient)
router.put('/updateDoctor', adminController.updateDoctor)
router.put('/updateAdmin', adminController.updateAdmin)

router.get('/getAllPatients', dashboard.getAllPatients)
router.get('/getAllDoctors', dashboard.getAllDoctors)

router.delete('/deletePatient', adminController.deletePatient)
router.delete('/deleteAdmin', adminController.deleteAdmin)
router.delete('/deleteDoctor', adminController.deleteDoctor)
module.exports=router