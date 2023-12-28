const mongoose = require('mongoose')

const { STRING} = require('../modelType/types')

const staffSchema = mongoose.Schema(
    {
        userName:STRING,
        email:STRING,
    },
)

let Staff = mongoose.model("Staff", staffSchema);


module.exports = Staff;