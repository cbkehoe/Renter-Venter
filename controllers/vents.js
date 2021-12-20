const Rent = require('../models/rent')

module.exports = {
    create
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