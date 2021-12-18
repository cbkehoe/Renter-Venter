const Rent = require('../models/rent')

module.exports = {
    new: newRent,
    create,
    index
}

function index(req, res) {
    Rent.find({}, function(err, rents){
        res.render('rents/index', { rents })
    })
}

function newRent (req, res) {
    res.render('rents/new', { title: 'Add Apartment'})
}

function create(req, res) {
    console.log(req.body)
    const rent = new Rent(req.body);
    rent.save(function (err) {
        if (err) return res.redirect('/rents/new');
        res.redirect('/rents')
    
    })
}

