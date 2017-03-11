"use strict";
exports.__esModule = true;
var cadena_1 = require("./cadena");
var num_1 = require("./num");
var cadena;
var numero;
cadena = new cadena_1.Cadena(" ");

console.log("Cadena: ", cadena.text);
console.log(" Palindromo: ", cadena.palindromo);
console.log(" N. Vocales: ", cadena.vocales);
console.log(" N. Palabras: ", cadena.palabras);
console.log(" N. Letras: ", cadena.letras);

numero = new num_1.Numero(7);
console.log("Numero: ", numero.valor);
console.log("Sumar", numero.sumar(10));
console.log("Restar", numero.resta(10));
console.log("Factorial: ", numero.factorial(numero.valor));
console.log("Num. primo: ", numero.primo);
