const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/index')

const port = 4000

app.use(express.json());


mongoose.connect("mongodb+srv://testuser:200319971993@cluster0.453kw.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('Database Connected')
}).catch((err) => {
    console.log('Err===>', err)
})
app.use(cors());
console.log('userRoutes',userRoutes)
app.use("/api", userRoutes)
app.listen(port, () => {
    console.log(`App is running ${port}`)
})