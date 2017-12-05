/**
 * Created by Sofia on 04.12.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    title: String,
    longdescription: String,
    shortdescription: String

});

module.exports = mongoose.model('Bear', BearSchema);