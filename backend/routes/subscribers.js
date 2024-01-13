const express = require('express')
const router = express.Router()

// get all
router.get('/', (req, res) => {
    res.send('Hello World')
})

// get one
router.get('/:id', (req, res) => {

})

// update one
router.patch ('/', (req, res) => {

})

// delete one 
router.delete('/', (req, res) => {

})

module.exports = router