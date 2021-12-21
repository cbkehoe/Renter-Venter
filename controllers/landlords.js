const Rent = require('../models/rent');
const Landlord = require('../models/landlord');


module.exports = {
    new: newLandlord,
    create,
    addToApt
}

function create (req, res) {
    const l = req.body;
    Landlord.create(req.body, function (err, landlord){
        res.redirect('/landlords/new');
    })
}

function addToApt (req, res) {
    Rent.findById(req.params.id, function(err, rent){
        rent.landlord.push(req.body.landlordId);
        rent.save(function(err){
            res.redirect(`/rents/${rent._id}`)
        })
    })
}

function newLandlord (req, res) {
    Landlord.find({}, function (err, landlords) {
        res.render('landlords/new', {
            title: 'Add Landlord',
            landlords
        })
    })
}