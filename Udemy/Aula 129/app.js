/**
 * Express - servidor web
 * Com Nodemon
 */

const express = require('express');
// init server web
const app = express();

// tratando o body de post
app.use(express.urlencoded({ extended: true }));

// get raiz do "site"
app.get('/', (req, res) => {
    res.send(`
        Hello World ! 🌎 <br>
        <form method="post" action="/">
            <input type="text" name="nome" placeholder="Nome">
            <input type="submit" value="Enviar">
        </form>
    `);
});

// page contact
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em <b>contato</b> com a gente !');
});

app.get('/tests/:id?', (req, res) => {
    // ver os parametros friendly
    console.table(req.params);
    // ver os parametros de query
    console.table(req.query);
    res.send('veja o console');
});

app.post('/', (req, res) => {
    // para ver o conteudo de um post é body
    // ps: precisa ser tratado
    console.table(req.body);
    let body = req.body;
    res.send(`
        <b>veja o console</b>
        <br>
        O nome enviado foi: ${body.nome}
    `);
});

// listen port
app.listen(3000, () => {
    console.log('Server running on port 3000');
});