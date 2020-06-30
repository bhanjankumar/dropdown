const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Country = require('./database/models/country');
app.use(express.json());


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/country",(req,res)=>{
    Country.find({})
    .then(country=>res.send(country))
    .catch((error)=>console.log(error));
})

app.post("/country",(req,res)=>{
    (new Country({name:req.body.name}))
    .save()
    .then((country)=>res.send(country))
    .catch((error)=>console.log(error));
})

app.listen(5000,()=>{
    console.log('server connected on ports 5000');
})