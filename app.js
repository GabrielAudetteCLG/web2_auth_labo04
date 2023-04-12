const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// connect to Atlas MongoDB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://alain:dF3QFMghEXqusbmU@cluster0.yml6m.mongodb.net/test')





// ne pas remonter plus haut...
const db = mongoose.connection;
db.on('error', err=>console.error('erreur de BD'));
db.on('open', ()=>console.log('Connexion a la BD OK!!'));





// insérer les configs de passport ici...

require('./config/passport')(passport);

app.use(expressLayouts);

// récupérer les variables reçues de "POST" (dans la requete.body)
app.use(express.urlencoded({extended: false}));

// création de la session express
app.use(session({
    secret: 'trucMachinBiduleSecretABC..XYZSupplementaireavec beaucoup de lettres',
    resave: true,
    saveUninitialized: true
}));

// initialisation de passport et le relier à la session
app.use(passport.initialize());
app.use(passport.session());

// connexion à flash
app.use(flash());

// quelques variables à définir pour le fonctionnement de l'authentification
// ICI à compléter

app.use('/css', express.static('./css'));
app.use('/js', express.static('./js'));
app.use('/images', express.static('./images'));

// les routes...
app.use('/', require('./routes/index'));
app.use('/usagers', require('./routes/usagers'));

// mes VUES
app.set('views', './pagesEJS');
app.set('view engine', 'ejs');
app.set('layout', 'layout');

app.listen(PORT, console.log(`Server démarré sur le port ${PORT}`));