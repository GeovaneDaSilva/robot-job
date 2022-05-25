require('../environments/environment')
   
const express = require("express")

const mongoose = require('mongoose');


var app = express()



mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
(res) => {
    try {
        console.log('Database ready in the PORT 27017: \x1b[32m%s\x1b[0m', 'online');
    } catch (error) {
        res.status(500).json({
            ok: false,
            message:' erros to connect database'
        })
    } 
    });




    module.exports = app;