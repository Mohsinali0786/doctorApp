const mongoose = require('mongoose')

const { STRING, STRING_REQUIRED ,ARRAY,REF_OBJECT_ID,NUMBER} = require('../modelType/types')

const regDoctorSchema = mongoose.Schema(
    {
        // doctorId: REF_OBJECT_ID('doctors'),
        doctorName:STRING_REQUIRED,
        contactNo:STRING,
        specialist:STRING,
        education:STRING
    },
)

let RegDoctor = mongoose.model("regDoctors", regDoctorSchema);


module.exports = RegDoctor;