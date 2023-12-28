const mongoose = require('mongoose')

const { STRING, STRING_REQUIRED ,ARRAY,REF_OBJECT_ID,OBJECT} = require('../modelType/types')

const appointmentSchema = mongoose.Schema(
    {
        doctorId: REF_OBJECT_ID('users'),
        userId: REF_OBJECT_ID('users'),
        dateAndTime: OBJECT,
    
    },
)

let Appointments = mongoose.model("appointment", appointmentSchema);
module.exports = Appointments;