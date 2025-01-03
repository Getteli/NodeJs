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