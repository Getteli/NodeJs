exports.index = (req, res) => {
    res.send(`
        Hello World ! 🌎 <br>
        <form method="post" action="/">
            <input type="text" name="nome" placeholder="Nome">
            <input type="submit" value="Enviar">
        </form>
    `);
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