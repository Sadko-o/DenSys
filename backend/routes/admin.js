const express=require('express');
const router=express.Router();
const adminController = require("../controllers/adminController")

router.post('/signupAdmin', adminController.signupAdmin)
router.post('/signupDoctor', adminController.signupDoctor)
router.post('/signupPatient', adminController.signupPatient)

router.put('/updatePatient', adminController.updatePatient)

module.exports=router