const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 8000;


app.use(expressLayouts);

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