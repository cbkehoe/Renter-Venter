const Rent = require('../models/rent')

module.exports = {
    create,
    deleteVent,
    // edit,
    // update
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

// function edit (req, res) {
//     Vent.findOne({_id: req.params.id, userVent: req.user._id }, function(err, vent){
//         if (err || !vent) return res.redire
//     })
// }