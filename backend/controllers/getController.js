const appointmentDoctors = require('../models/appointmentsModal')
const getRegDoctors = require('../models/resDoctorModal')




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
module.exports = {getDoctors,getAppointment}