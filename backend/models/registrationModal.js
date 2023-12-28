const mongoose = require('mongoose')

const { STRING, STRING_REQUIRED ,ARRAY,REF_OBJECT_ID,NUMBER, ARRAY_REQUIRED} = require('../modelType/types')

const reggistrationSchema = mongoose.Schema(
    {
        doctorName:STRING,
        userName:STRING,
        contactNo:STRING,
        specialist:STRING,
        education:STRING,
        type:STRING,
        email:STRING,
        password:STRING,
        userType:STRING,
        dateAndTime: ARRAY_REQUIRED,
        // dayAndtime: [{day:STRING,time:ARRAY_REQUIRED}],

    },
)

let Registration = mongoose.model("users", reggistrationSchema);


module.exports = Registration;