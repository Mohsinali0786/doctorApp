const express = require('express')
const routes = express.Router()

// console.log("require('./get')",require('./get'))
routes.use(require('./get'))
routes.use(require('./add'))

module.exports = routes