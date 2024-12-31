/**
 * Modulos em Node js
 *
 */

const name = "Douglas";
const lastname = "Araujo";

const falaNome = () => {
    console.log(`Olá, meu nome é ${name} ${lastname}`);
}

// module.exports.name = name;
// module.exports.lastname = lastname;
// module.exports.falaNome = falaNome;

exports.name = name;
exports.lastname = lastname;
exports.falaNome = falaNome;

// ou
this.qlqCoisa = "test";