const express = require('express');
const router = express.Router();
const passport = require('passport');
// const bcrypt = require('bcryptjs');
// const Usagers = require('../modeles/usagers');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/', ensureAuthenticated, (requete, reponse) => 
    reponse.render('usagers', {titre: 'Gestion des usagers'}));

router.post('/login', (req, rep, next)=>{
    passport.authenticate('local', {
        successRedirect: '/usagers',
        failureRedirect: '/',
        failureFlash: true
    })(req, rep, next);
});
// page logout... à ajouter plus tard...

module.exports = router;