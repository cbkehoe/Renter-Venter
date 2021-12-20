const express = require('express');
const router = express.Router();
const ventsCtrl = require('../controllers/vents')
const isLoggedIn = require('../config/auth');

router.post('/rents/:id/vents', isLoggedIn, ventsCtrl.create)

module.exports = router;
