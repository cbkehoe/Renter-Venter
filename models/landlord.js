const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const landlordSchema = new Schema({
    name: {type: String, required: true, unique: true},
    friendly: { type: Boolean, default: true }
    }, {
        timestamps: true
    })

    module.exports = mongoose.model('Landlord', landlordSchema)