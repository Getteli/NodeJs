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

// tratando o body de post
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// listen port
app.listen(3000, () => {
    console.log('Server running on port 3000');
});