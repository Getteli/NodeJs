const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// exemplo de middleware
// podemos adicionar niddlewares (funcoes que vao realizar alguma coisa antes de outra)
// na rota antes de chegar ate o metodo final (que fará algo)
// neste exemplo criamos uma funcao
function myMiddleware(req, res, next) // <- o 3° parametro é o next, que informa qual o proximo passo
// ele precisa ser executado SMP para indicar continuidade, se nao fica parado.
// obs: esse parametro ele pode ser usado tbm no metodo final la no controller, só nao usamos pois era o ultimo passo la (nao existiria um next)
{
    // console.log("passei no seu middleware");

    // criando sessões
    // nos criamos a sessão nesse fluxo (entre os metodos q estao sendo executados na rota)
    // e podemos continuar acessando ele em outro metodo, no proximo (next) metodo
    // req.session = { nome: "Douglas", sobrenome: "Araujo"};

    // executando o next()
    next();
}

//#region Home 
    route.get('/', myMiddleware, homeController.index);

    route.post('/', homeController.sendForm);
//#endregion

//#region Contact
    route.get('/contact', contactController.index);

    route.get('/tests/:id?', (req, res) => {
        // ver os parametros friendly
        console.table(req.params);
        // ver os parametros de query
        console.table(req.query);
        res.send('veja o console');
    });

//#endregion

module.exports = route;