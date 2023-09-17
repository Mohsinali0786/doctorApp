const mongoose = require('mongoose')

const { STRING, STRING_REQUIRED ,ARRAY,REF_OBJECT_ID,NUMBER} = require('../modelType/types')

const regUserSchema = mongoose.Schema(
    {
        // doctorId: REF_OBJECT_ID('doctors'),
        userName:STRING_REQUIRED,
        userEmail:STRING_REQUIRED,
        // contactNo:STRING,
        userPassword:STRING_REQUIRED
    },
)

let RegUser = mongoose.model("regUser", regUserSchema);
// let LoginUser = mongoose.model("loginUser", regUserSchema);

module.exports = RegUser;
// module.exports = LoginUser;
