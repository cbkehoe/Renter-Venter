const Rent = require('../models/rent')
const Landlord = require('../models/landlord')

module.exports = {
    new: newRent,
    create,
    index,
    show
}

function index(req, res) {
    Rent.find({}, function (err, rents) {
        res.render('rents/index', { rents })
    })
}

function newRent(req, res) {
    res.render('rents/new', { title: 'Add Apartment' })
}



function create(req, res) {
    console.log(req.body)
    const rent = new Rent(req.body);
    rent.save(function (err) {
        if (err) return res.redirect('/rents/new');
        res.redirect(`/rents/${rent._id}`)

    })
}

function show(req, res) {
    Rent.findById(req.params.id)
        .populate('apartment manager').exec(function (err, rent) {
            Landlord.find(
                { _id: { $nin: rent.manager } },
                function (err, landlords) {
                    res.render('rents/show', {
                        rent, landlords
                    })
                }
            )
        })
}