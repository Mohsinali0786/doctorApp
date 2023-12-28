const mongoose = require('mongoose')

const { STRING , REF_OBJECT_ID} = require('../modelType/types')

const staffSalSchema = mongoose.Schema(
    {
        staffId:REF_OBJECT_ID("Staff"),
        salary:String
    },
)

let staffSal = mongoose.model("staffSalSchema", staffSalSchema);


module.exports = staffSal;