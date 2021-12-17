const Rent = require('../models/rent')

module.exports = {
    new: newRent
}

function newRent (req, res) {
    res.render('rents/new', { title: 'Add Apartment'})
}