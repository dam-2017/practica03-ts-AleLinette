import {Cadena} from './cadena';
import {Operacion} from './num';

let cadena = new Cadena("ana no on ana");
console.log("Palabras: ",cadena.numeropalabra);
console.log("Letras: ",cadena.numeroletra);
console.log("Palindromo: ",cadena.palindromo);
console.log ("__________________________")

let opera = new Operacion();

console.log("Resultado de suma: "+opera.suma(2, 2));
console.log("Resultado de resta: "+opera.resta(2, 1));
console.log("El factorial es: "+opera.factorial(8));
console.log("Primo: "+opera.primo(8));