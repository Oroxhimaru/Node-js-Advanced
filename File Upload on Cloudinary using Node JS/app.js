require('dotenv').config();

var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ie-csv");

const express = require("express");
const app = express();

// var userRoute = require('./routes/userRoute');

// app.use('/api',userRoute);

var adminRoute = require('./routes/adminRoute');

app.use('/api', adminRoute);

app.listen(3000,function(){
    console.log('app is running');
});