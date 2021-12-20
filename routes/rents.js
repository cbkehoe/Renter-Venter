const express = require('express');
const router = express.Router();
const rentsCtrl = require('../controllers/rents')
const isLoggedIn = require('../config/auth');

router.get('/', rentsCtrl.index);
router.post('/', isLoggedIn, rentsCtrl.create)
router.get('/new', isLoggedIn, rentsCtrl.new);
router.get('/:id', rentsCtrl.show)

module.exports = router;