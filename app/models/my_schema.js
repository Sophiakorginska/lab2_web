/**
 * Created by Sofia on 04.12.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    date: String,
    author: String,
    text1: String

});

var PostSchema2 = new Schema({
    img: String,
    caption: String,
    text: String

});
module.exports = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post2', PostSchema2);
