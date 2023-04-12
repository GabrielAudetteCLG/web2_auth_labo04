const express = require('express');
const router = express.Router();


// ajout des routes pour l'authentification

router.get('/', (requete, reponse) => 
    reponse.render('index', {titre: 'mon beau site Web'}));



module.exports = router;