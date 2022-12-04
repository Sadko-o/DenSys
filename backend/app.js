const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()
var cors = require('cors')
app.use(cors())
// CONNECTING DATABASE
const db = process.env.DATABASE
mongoose.connect( db ).then(() => console.log("Mongoose is ON")).catch((error) => console.log(error))

// ????
require("./models/patientModel")
require("./models/adminModel")
require("./models/doctorModel")

// IMPORT MIDDLEWARE
const auth = require('./routes/login')
const admin = require('./routes/admin')
app.use(express.json())



// MIDDLEWARE
app.use(auth)
app.use(admin)


app.get('/', (req, res) => {
  res.send('Хеееллоу ночной жор')
})




// FOR LOCAL 
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`)
})