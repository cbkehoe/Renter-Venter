var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ventSchema = new Schema({
    content: {type: String, required: true},
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref:
    'User'},
    userName: String,
    userAvatar: String,
  }, {
    timestamps: true
  })

const rentSchema = new Schema({
    apartment: [String],
    address: String,
    vacant: { type: Boolean, default: true},
    vents: [ventSchema],
    apartment: [{type: Schema.Types.ObjectId, ref: 'Landlord'}]
})

module.exports = mongoose.model('Rent', rentSchema);
