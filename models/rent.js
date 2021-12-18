var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ventSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
})

const rentSchema = new Schema({
    apartment: String,
    address: String,
    vacant: { type: Boolean, default: true},
    vents: [ventSchema]
})

module.exports = mongoose.model('Rent', rentSchema);