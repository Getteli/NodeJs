/**
 * Modules node js 2
 */

// criado pela gente
const mod1 = require("./mod1").falaNome;
const {name, lastname, talkName} = require("./mod1");

// padrao node / js
const path = require("path");
// se fosse baixado do npm
const axios = require("axios");

console.log(name);
mod1();