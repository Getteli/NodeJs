module.exports = (req, res, next) => {
    console.log("Middleware GLOBAL");

    next(); // executa o proximo middleware ou controller
};