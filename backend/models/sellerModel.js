var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sellerSchema = new Schema({
    id: Number,
    name: String,
    username: String,
    password: String,
    slot: {type: Schema.ObjectId, ref: 'timeSlot'}
});

const seller = mongoose.model('seller', sellerSchema)

module.exports = seller;