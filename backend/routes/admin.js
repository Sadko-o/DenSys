const express=require('express');
const router=express.Router();
const adminController = require("../controllers/adminController")
const dashboard = require("../controllers/dashboard")

router.post('/signupAdmin', adminController.signupAdmin)
router.post('/signupDoctor', adminController.signupDoctor)
router.post('/signupPatient', adminController.signupPatient)

router.put('/updatePatient', adminController.updatePatient)
router.put('/updateDoctor', adminController.updateDoctor)

router.get('/getAllPatients', dashboard.getAllPatients)
router.get('/getAllDoctors', dashboard.getAllDoctors)

module.exports=router