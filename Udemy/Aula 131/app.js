/**
 * Express - servidor web
 * Com Nodemon
 * Rotas - igual ao rotes do laravel
 * utilizando o padrao MVC
 */

const express = require('express');
// init server web
const app = express();
const routes = require('./routes');
const path = require('path');

// tratando o body de post
app.use(express.urlencoded({ extended: true }));

// para usar views, seta o caminho da pasta views para qualquer coisa que usar o render pegar o nome do arquivo dessa pasta
app.set('views',path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); // esas engine é a mais parecida com um html depois de gerado

// para usar as rotas
app.use(routes);

// listen port
app.listen(3000, () => {
    console.log('Server running on port 3000');
});