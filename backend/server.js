const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connection to Database'))

app.use(express.json())

const subscribersRouter  = require('../backend2/routes/subscribers')
app.use('/subscribers', subscribersRouter)

port = 5000
app.listen(port, () => {console.log(`Server started on port ${port}`)})
