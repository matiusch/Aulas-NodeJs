"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.setLigado = function (ligado) {
        this.ligado = ligado;
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
    };
    Carro.prototype.andar = function () {
        if (this.ligado) {
            console.log("o carro " + this.modelo + " do ano " + this.ano + " de placa " + this.placa + " esta se locomovendo");
        }
        else {
            console.log("o carro está desligado");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado) {
            console.log("o carro " + this.modelo + " do ano " + this.ano + " de placa " + this.placa + " acabou de parar");
        }
        else {
            console.log("o carro está desligado");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
