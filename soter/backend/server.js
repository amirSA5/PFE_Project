const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');


dotenv.config()


mongoose.connect(process.env.DATABASE, ()=>{
    console.log('connection to  database established')
})


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(3001,()=>{
    console.log('express server is running on port 3001');

})