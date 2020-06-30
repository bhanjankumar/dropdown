const mongoose = require('mongoose');


const CountryScheema = new mongoose.Schema({
    name:{
        type:String,
        minlength:2
    }
})

const Country = mongoose.model('Country',CountryScheema);
module.exports = Country;