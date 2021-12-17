var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const rentSchema = new Schema({
    apartment: String,
    address: String,
    vacant: { type: Boolean, default: true},
})

module.exports = mongoose.model('Rent', rentSchema);