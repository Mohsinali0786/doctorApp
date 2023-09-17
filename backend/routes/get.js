const express = require('express')
const routes = express.Router()

const { getDoctors,getAppointment} = require('../controllers/getController')


routes.get('/doctors', getDoctors)
routes.get('/getAllAppointment', getAppointment)


// routes.get('/getusers', getAllUsers)
// routes.get('/getattendance', getAllAttendance)

module.exports = routes