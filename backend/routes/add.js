const express = require('express')
const routes = express.Router()
// const { addD } = require('../controllers/postController')
const {bookedAppoitment,loginUser , registeredUsers , editUsers ,deleteUsers, staffController, staffSalController} = require('../controllers/postController')
// const {registeredDoctors } = require('../controllers/postController')



// routes.post('/sigup', registerCompany)
// routes.post('/registeruser', registerUser)

// routes.post('/logincompany', authCompany)
// routes.post('/loginuser', authUser)
// routes.post('/change-role/:id', changeRole)


// routes.post('/deleteuser/:id', deleteUser)
// routes.post('/updateuser/:id', updateUser)

// routes.post('/doctors', addDoctors)
// routes.post('/reg-doctors', registeredDoctors)
// routes.post('/reg-user', registeredUser)
routes.post('/login', loginUser)
routes.post('/registration', registeredUsers)
routes.post('/editUser/:id', editUsers)
routes.post('/bookAppointment', bookedAppoitment)
routes.delete('/deleteUser/:id', deleteUsers)
routes.post('/addStaff', staffController)
routes.post('/addStaffSal', staffSalController)








// routes.post('/bookedAppointment', bookedAppointment)



module.exports = routes