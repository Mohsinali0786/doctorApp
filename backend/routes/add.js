const express = require('express')
const routes = express.Router()
// const { addD } = require('../controllers/postController')
const {addDoctors ,registeredDoctors,registeredUser,loginUser} = require('../controllers/postController')
// const {registeredDoctors } = require('../controllers/postController')



// routes.post('/sigup', registerCompany)
// routes.post('/registeruser', registerUser)

// routes.post('/logincompany', authCompany)
// routes.post('/loginuser', authUser)
// routes.post('/change-role/:id', changeRole)


// routes.post('/deleteuser/:id', deleteUser)
// routes.post('/updateuser/:id', updateUser)

routes.post('/doctors', addDoctors)
routes.post('/reg-doctors', registeredDoctors)
routes.post('/reg-user', registeredUser)
routes.post('/login-user', loginUser)

// routes.post('/bookedAppointment', bookedAppointment)



module.exports = routes