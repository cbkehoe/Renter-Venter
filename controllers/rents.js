const Rent = require('../models/rent')

module.exports = {
    new: newRent,
    create,
    index,
    show
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

function show(req, res) {
    Rent.findById(req.params.id, function(err, rent) {
      res.render('rents/show', { rent })
    })
  }