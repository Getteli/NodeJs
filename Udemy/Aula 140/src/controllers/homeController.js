// importa o model
const HomeModel = require('../models/HomeModel');

// para criar
// HomeModel.create({
//     title: 'tituloteste',
//     description: 'Hello World',
// }).then((data) => {
//     console.log('Home criada com sucesso');
//     console.log(data);
// }).catch(err => {
//     console.error('Erro ao salvar home', err);
// });

// para buscar
HomeModel.find().then((data) => {
    console.log('Busca feita:');
    console.log(data);
}).catch(err => {
    console.error('Erro ao salvar home', err);
});

exports.index = (req, res) => {
    // acessando a sessao que foi iniciada no middleware anterior
    res.render('index');
    console.log(req.session.nome);
};

exports.sendForm = (req, res) => {
    // para ver o conteudo de um post é body
    // ps: precisa ser tratado
    console.table(req.body);
    let body = req.body;
    res.send(`
        <b>veja o console</b>
        <br>
        O nome enviado foi: ${body.nome}
    `);
};