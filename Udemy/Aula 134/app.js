/**
 * Express - servidor web
 * Sobre Middleware
 */

const express = require('express');
// init server web
const app = express();
const routes = require('./routes');
const path = require('path');
const middlewareGlobal = require('./src/middlewares/middleware');

// tratando o body de post
app.use(express.urlencoded({ extended: true }));

// chama os conteudos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

// para usar views, seta o caminho da pasta views para qualquer coisa que usar o render pegar o nome do arquivo dessa pasta
app.set('views',path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); // esas engine é a mais parecida com um html depois de gerado

// chamando o middleware global para todas as rotas
// obs: veja que o global tem preferencia a todos os outros que sejam unicos
app.use(middlewareGlobal)

// para usar as rotas
app.use(routes);

// listen port
app.listen(3000, () => {
    console.log('Server running on port 3000');
});