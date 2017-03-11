import {Cadena} from './cadena';
import {Num } from './num';

let cadena : Cadena;
let numero : Num;
cadena = new Cadena(" ");

console.log("Cadena: ", cadena.text);
console.log(" Palindromo: ", cadena.palindromo);
console.log(" N. vocales: ",cadena.vocales);
console.log(" N. palabras: ",cadena.palabras);
console.log(" N. letras: ",cadena.letras);

numero = new Num(7);
console.log("Numero: ", numero.valor);
console.log("Sumar 5", numero.sumar(5));
console.log("Restar 5", numero.resta(10));
console.log("Factorial: ",numero.factorial(numero.valor));
console.log("Num. primo: ",numero.primo);