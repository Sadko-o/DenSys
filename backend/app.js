const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()

const PORT = process.env.PORT || 8080
const db   = process.env.DATABASE

require("./models/patientModel")
require("./models/adminModel")
require("./models/doctorModel")
app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect( db ).then(() => console.log("Mongoose is ON")).catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.send('Хеееллоу ночной жор')
})

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`)
})