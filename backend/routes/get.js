const express = require('express')
const routes = express.Router()

const { getDoctors,getAllAppointments , getAllUsers, getAllStaff} = require('../controllers/getController')


// routes.get('/doctors', getDoctors)
// routes.get('/getAllAppointment', getAppointment)

routes.get('/getAllUsers', getAllUsers)
routes.get('/getAllUsers/:id', getAllUsers)
routes.get('/getAllAppointment', getAllAppointments)
routes.get('/getAllAppointment/:searchValue', getAllAppointments)
routes.get('/getAllStaff', getAllStaff)

// routes.get('/getusers', getAllUsers)
// routes.get('/getattendance', getAllAttendance)

module.exports = routes