"use strict";
exports.__esModule = true;
var Cadena = (function () {
    function Cadena(cadena) {
        this.cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "palindromo", {
        get: function () {
            var reversa = this.cadena.split("").reverse().join("").toLowerCase();
            reversa = reversa.replace(/\s/g, "");
            if (reversa == this.cadena.replace(/\s/g, "").toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "vocales", {
        get: function () {
            var letras = this.cadena.split("");
            var cont = 0;
            for (var _a = 0, letras_1 = letras; _a < letras_1.length; _a++) {
                var letra = letras_1[_a];
                switch (letra.toLowerCase()) {
                    case "Letra a":
                        cont++;
                        break;
                    case "Letra e":
                        cont++;
                        break;
                    case "Letra i":
                        cont++;
                        break;
                    case "Letra o":
                        cont++;
                        break;
                    case "Letra u":
                        cont++;
                        break;
                }
            }
            return cont;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "Letras", {
        get: function () {
            var cont = 0;
            var letras = this.cadena.split("");
            for (var _a = 0, letras_2 = letras; _a < letras_2.length; _a++) {
                var letra = letras_2[_a];
                if (/[a-z]/.test(letra.toLocaleLowerCase()))
                    cont++;
            }
            return oncontextmenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "Palabras", {
        get: function () {
            var cont = 0;
            var palabras = this.cadena.split(" ");
            for (var _a = 0, palabras_1 = palabras; _a < palabras_1.length; _a++) {
                var palabra = palabras_1[_a];
                if (palabra.length != 0)
                    cont++;
            }
            return cont;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "Texto", {
        get: function () {
            return this.cadena;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
