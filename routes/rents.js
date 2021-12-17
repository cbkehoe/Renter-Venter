const express = require('express');
const router = express.Router();
const rentsCtrl = require('../controllers/rents')
const isLoggedIn = require('../config/auth');

router.get('/new', rentsCtrl.new)

// router.get('/', rentsCtrl.index);
router.get('/new', isLoggedIn, rentsCtrl.new);

module.exports = router;