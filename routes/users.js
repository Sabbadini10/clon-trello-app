const express = require('express');
const router = express.Router();

const {profile} = require('../controllers/userController');
const checkToken = require('../middelware/checkToken');

/* /api/users */
router.get('/profile', checkToken, profile);

module.exports = router;