const express = require('express');
const router = express.Router() ;

const {profile, update, remove} = require('../controllers/userController');
const checkToken = require('../middelware/checkToken');

/* /api/users */
router
    .get("/profile", profile)
    
    .route('/profile/:id')
        .post(update)
        .delete(remove)

module.exports = router;