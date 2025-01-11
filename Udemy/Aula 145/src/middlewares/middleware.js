exports.globalMid = (req, res, next) => {
    next(); // executa o proximo middleware ou controller
};

exports.checkCsrfError = (err, req, res, next) => {
    // se nao for enviado o token, manda para a pagina de erro
    if(err && err.code == 'EBADCSRFTOKEN')
    {
        return res.render('error',{mensagem: 'bad csrf error'});
    }

    next();
};


exports.sendCsrfToken = (req, res, next) => {
    // envia o token
    res.locals.csrfToken = req.csrfToken();
    next();
};