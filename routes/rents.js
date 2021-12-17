const express = require('express');
const router = express.Router();
const rentsCtrl = require('../controllers/rents')
const isLoggedIn = require('../config.auth');

router.get('/new', rentsCtrl.new)

router.get('/', moviesCtrl.index);
router.get('/new', isLoggedIn, moviesCtrl.new);

module.exports = router;