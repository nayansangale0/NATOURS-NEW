const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const  tourRouter = require('./routes/tourRoutes');
const  userRouter = require('./routes/userRoutes');

const app = express();

//1) Middleware
app.use(morgan('dev')); // It will show us which request is hit by us with the response code
app.use(express.json());
app.use((req, res, next) => {
    console.log("Hello from the middleware");
    next();
})
 app.use((req, res, next) =>{
    req.requestTime = new Date().toISOString();
    next();
 })





//3) Routes




app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);




// 4) Starting the server

module.exports = app;