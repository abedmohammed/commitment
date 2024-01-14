require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const usersRouter  = require('./routes/users')
app.use('/users', usersRouter)

port = 5000
app.listen(port, () => {console.log(`Server started on port ${port}`)})
