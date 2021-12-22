const Rent = require('../models/rent');
const Landlord = require('../models/landlord');


module.exports = {
    new: newLandlord,
    create,
    addToApt
}

function create (req, res) {
    const l = req.body;
    req.body.born = req.body.born;
    Landlord.create(req.body, function (err, landlord){
        res.redirect('/landlords/new');
        l
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

function addToApt (req, res) {
    Rent.findById(req.params.id, function(err, rent){
        rent.manager.push(req.body.landlordId);
        rent.save(function(err, rent){
            res.redirect(`/rents/${rent._id}`)
        })
    })
}