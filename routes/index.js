const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => 
    reponse.render('index', {titre: 'mon beau site Web'}));

module.exports = router;