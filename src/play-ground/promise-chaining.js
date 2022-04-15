const mongoose = require('mongoose')
const express = require('express')
const Task = require('../models/task')
require('../db/mongoose')

const app = express()

// app.get('/task/:id', (req, res) => {
//     const _id = req.params.id
// })

Task.findByIdAndDelete('6258714505a2b34ba98ee54a').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })

}).then((result) => {
    console.log(result)
}).catch((e) => {
    res.status(500).send()
})