const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')

const { STRING, STRING_REQUIRED ,ARRAY,REF_OBJECT_ID} = require('../modelType/types')

const doctorSchema = mongoose.Schema(
    {
        doctorId: REF_OBJECT_ID('regDoctors'),
        dayAndtime: [{day:STRING,time:ARRAY}],
    
    },
)

let appointmentDoctors = mongoose.model("doctors", doctorSchema);
module.exports = appointmentDoctors;