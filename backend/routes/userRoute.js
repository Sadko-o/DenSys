const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Хеееллоу ночной жор')
})

module.exports = router