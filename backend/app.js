const express = require('express')
const app = express()
require("dotenv").config()


const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Хеееллоу ночной жор')
})

app.listen(port, () => {
  console.log(`App Listening on port ${port}`)
})