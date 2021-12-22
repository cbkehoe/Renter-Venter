const Rent = require('../models/rent')

module.exports = {
    create,
    deleteVent,
    update

}


function create(req, res){
    Rent.findById(req.params.id, function(err, rent) {
        req.body.user = req.user._id
        req.body.userName = req.user.name 
        req.body.userAvatar = req.user.avatar 

        rent.vents.push(req.body)
        rent.save(function(err){
            res.redirect(`/rents/${rent._id}`)
        })
    })
}

function deleteVent (req, res, next) {
    Rent.findOne({'vents._id': req.params.id}).then(function(rent) {
        const vent = rent.vents.id(req.params.id);
        if (!vent.user.equals(req.user._id)) return res.redirect(`/rents/${rent._id}`);
        vent.remove();
        rent.save().then(function() {
            res.redirect(`/rents/${rent._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

function update (req, res) {
    Rent.findOne({'vents._id': req.params.id})
    .then(function(rent){
        const vent = rent.vents.id(req.params.id)
        vent.content = req.body.content 
        rent.save(function(err){
            res.redirect(`/rents/${rent._id}`)
        })
    })
}