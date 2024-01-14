const mongoose = require('mongoose')

const entry = new mongoose.Schema({
    day: Number,
    value: String
})

const habit = new mongoose.Schema({
    name: String,
    // info: {
    //     settings: {
    //         title: String,
    //         type: String,
    //         colour: String,
    //     },
    //     entries: [entry]
    // }
})

const dataSchema = new mongoose.Schema({
    // habits: [habit]
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserData', dataSchema)