var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


var timeSchema = new Schema({
    times: Array,


    created_date: {  type: Date, required: [false, ' no required']},


});


timeSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} error.' });


module.exports = mongoose.model('Time', timeSchema);