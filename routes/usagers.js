const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => 
    reponse.render('usagers', {titre: 'Gestion des usagers'}));

module.exports = router;