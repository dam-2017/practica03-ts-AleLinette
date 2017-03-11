"use strict";
exports.__esModule = true;
var Num = (function () {
    function Num(numero) {
        this.numero = numero;
    }
    Num.prototype.sumar = function (numero) {
        return this.numero + numero;
    };
    Num.prototype.resta = function (numero) {
        return this.numero - numero;
    };
    Num.prototype.factorial = function (numero) {
        if (numero < 0)
            return -1;
        else if (numero == 0)
            return 1;
        else
            return (numero * this.factorial(numero - 1));
    };
    Object.defineProperty(Num.prototype, "primo", {
        get: function () {
            var primo = false;
            for (var i = 1; i < this.numero; i++) {
                if (this.numero % i == 0 && i != 1 && i != this.numero) {
                    primo = false;
                    break;
                }
                else
                    primo = true;
            }
            return primo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Num.prototype, "valor", {
        get: function () {
            return this.numero;
        },
        enumerable: true,
        configurable: true
    });
    return Num;
}());
exports.Num = Num;
