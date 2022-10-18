const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()

const port = process.env.PORT || 8080
const db   = process.env.DATABASE

mongoose.connect( db ).then(() => console.log("Mongoose is ON")).catch((error) => console.log(error))




app.get('/', (req, res) => {
  res.send('Хеееллоу ночной жор')
})

app.listen(port, () => {
  console.log(`App Listening on port ${port}`)
})