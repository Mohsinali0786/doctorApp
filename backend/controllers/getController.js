const appointmentDoctors = require('../models/appointmentsModal')
const getRegDoctors = require('../models/resDoctorModal')
const Registration = require("../models/registrationModal")
const Appointments = require("../models/bookedAppointment")
const staffSal = require('../models/staffSalary')


const getDoctors = async (req, res) => {
    const AllDoctors = await getRegDoctors.find({})
    console.log('AllComapnies', AllDoctors)

    if (AllDoctors) {
        // res.json(AllDoctors)
        res.send({ status: 'success', AllDoctors })
        // res.json(AllCompanies)
    }
    else {
        res.send({
            message: "Error in data receiving"
        })
    }

    const getAppointment = async (req, res) => {
        const AllDoctors = await appointmentDoctors.find().populate("doctorId")
        console.log('AllComapnies', AllDoctors)
    
        if (AllDoctors) {
            // res.json(AllDoctors)
            res.send({ status: 'success', AllDoctors })
            // res.json(AllCompanies)
        }
        else {
            res.send({
                message: "Error in data receiving"
            })
        }
    
    }
}
const getAppointment = async (req, res) => {
    const AllDoctors = await appointmentDoctors.find().populate("doctorId")
    console.log('AllComapnies', AllDoctors)

    if (AllDoctors) {
        // res.json(AllDoctors)
        res.send({ status: 'success', AllDoctors })
        // res.json(AllCompanies)
    }
    else {
        res.send({
            message: "Error in data receiving"
        })
    }

}
const getAllUsers = async (req, res) => {
    const {userType ,type} = req.query 
    // console.log(req.params,'params')
    console.log(req.query,'query')
    // console.log(req.body,'body')

    let AllUser=null
    const {id} = req.params
    if(id){
        AllUser = await Registration.findById(id)
    }
    else if(userType || type){
        let customkey =userType || type
        // console.log(customkey,'customeKey')
        AllUser = await Registration.find(userType ? {"userType" : userType} : type ? {"type":type} : null )
    }
    else{
        AllUser = await Registration.find()
    }
    // console.log('AllComapnies', AllUser)

    if (AllUser) {
        // res.json(AllDoctors)
        res.send({ status: 'success', AllUser })
        // res.json(AllCompanies)
    }
    else {
        res.send({
            message: "Error in data receiving"
        })
    }

}
const getAllAppointments = async (req, res) => {
    let AllUser=[]
    console.log('req.params && req.params.searchBy', req.params && req.params.searchBy)
    if(req.params && req.params.searchBy){
        AllUser = await Appointments.find().populate(
            {
                path: 'doctorId',
                match: {
                    userName:req.params.searchBy
                }
            })  
        console.log('getAllAppointments', AllUser)
        // AllUser - AllUser && AllUser.filter((x)=>x?.doctorId?.userName == req.params.searchBy)
        // console.log('getAllAppointments After', AllUser)
        if(!AllUser.doctorId) AllUser=[]
    }
    else{
        console.log('getAllAppointments Else', AllUser)
        AllUser = await Appointments.find().populate("doctorId userId")
    }

    if (AllUser) {
        // res.json(AllUser)
        res.send({ status: 'success', AllUser })
        // res.json(AllCompanies)
    }
    else {
        res.send({
            message: "Error in data receiving"
        })
    }
}
const getAllStaff = async (req, res) => {
    const AllDoctors = await staffSal.find().populate("staffId")
    // console.log('getAllAppointments', getAllAppointments)

    if (AllDoctors) {
        // res.json(AllDoctors)
        res.send({ status: 'success', AllDoctors })
        // res.json(AllCompanies)
    }
    else {
        res.send({
            message: "Error in data receiving"
        })
    }
}
module.exports = {getDoctors,getAppointment , getAllUsers , getAllAppointments , getAllStaff}