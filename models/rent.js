const Rent = require('..models/rent')
const Schema = mongoose.Schema;

const rentSchema = new Schema({
    apt: String,
    rating: Number,
    comment: String
})