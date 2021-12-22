const express = require('express');
const router = express.Router();
const landlordsCtrl = require('../controllers/landlords');
const isLoggedIn = require('../config/auth');

router.get('/landlords/new', isLoggedIn, landlordsCtrl.new)
router.post('/rents/:id/landlords', isLoggedIn, landlordsCtrl.addToApt)
router.post('/landlords', isLoggedIn, landlordsCtrl.create)

module.exports = router; 