/**
 * Escrevendo e lendo arquivos
 */
const path = require('path');
const writeFile = require('./modules/write');
const readFile = require('./modules/read');

const pathFile = path.resolve(__dirname, '.', 'teste.json');

const people = [
  {"nome": "John"},
  {"nome": "Mary"},
  {"nome": "Didier"},  
];

const json = JSON.stringify(people, '', 2);

writeFile(pathFile, json, 'w');

readFile(pathFile).then((f) =>
{
    dados = JSON.parse(f, true);

    dados.map((d) =>
    {
        console.log(d.nome);
    })
});