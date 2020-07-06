var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sellerSchema = new Schema({
    id: {type : Number},
    name: {type : String},
    username: {type : String},
    password: {type : String}
});

const seller = mongoose.model('seller', sellerSchema)

module.exports = seller;