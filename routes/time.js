'use strict'

const express = require('express');
const timeController = require('../controllers/time')



let router = express.Router();

router.post('/puppeteer', timeController.puppeteer)






  






module.exports = router;