// import express from 'express';
// import bodyParser from 'body-parser'
// import userRoutes from './routes/users.js';


const express = require('express');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users.js')


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    
    res.send('Hello from Home Page')
})

app.listen(PORT,()=>console.log(`Server Running on port: http://localhost:${PORT}`));

