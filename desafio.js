"use strict";
exports.__esModule = true;
//npm install --save @types/readline-sync
var readlineSync = require("readline-sync");
var titulo = readlineSync.question("informe o titulo? ");
var descricao = readlineSync.question("informe a descrição? ");
var htmlRecebe = "<html><head></head><body><h1> " + titulo + "</h1></hr><p>" + descricao + "</p></body></html>";
console.log(htmlRecebe);
