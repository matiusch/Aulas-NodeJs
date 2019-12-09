//npm install --save @types/readline-sync
import  readlineSync = require('readline-sync');
 
var titulo:string    = readlineSync.question("informe o titulo? ");
var descricao:string = readlineSync.question("informe a descrição? ");

var htmlRecebe:string = `<html><head></head><body><h1> ${titulo}</h1></hr><p>${descricao}</p></body></html>`;

console.log(htmlRecebe);