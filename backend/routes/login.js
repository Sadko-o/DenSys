const express=require('express');
const router=express.Router();
const userController = require("../controllers/userController")

router.post('/loginDoctor', userController.loginDoctor)
router.post('/loginPatient', userController.loginPatient)
router.post('/loginAdmin', userController.loginAdmin)



// const login = app.use

// router.get('/protected',authorization,(req,res)=>{
//     res.send("hello user")
// })

module.exports=router