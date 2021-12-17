module.exports = {
    new: newRent
}

function newRent (req, res) {
    res.render('rents/new')
}