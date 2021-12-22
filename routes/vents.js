const express = require('express');
const router = express.Router();
const ventsCtrl = require('../controllers/vents')
const isLoggedIn = require('../config/auth');

router.post('/rents/:id/vents', isLoggedIn, ventsCtrl.create)
router.delete('/vents/:id', isLoggedIn, ventsCtrl.deleteVent)
// router.get('/vents/:id/edit', ventCtrl.edit)
// router.put('/vents/:id', ventsCtrl.update)
module.exports = router;
