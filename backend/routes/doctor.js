const express=require('express');
const router=express.Router();
const appointmentController = require("../controllers/appointmentController")

router.put('/appointment', appointmentController.updateAppointment)