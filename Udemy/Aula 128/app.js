/**
 * Express - servidor web
 * Com Nodemon
 */

const express = require('express');
// init server web
const app = express();

// get raiz do "site"
app.get('/', (req, res) => {
    res.send('Hello World! 🌎');
});

// page contact
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em <b>contato</b> com a gente !');
});

// listen port
app.listen(3000, () => {
    console.log('Server running on port 3000');
});