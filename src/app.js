const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const userRoute = require('./controller/user.controller')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/user', userRoute)
app.use((error, req, res, next) => res.send(error.message))

module.exports = app