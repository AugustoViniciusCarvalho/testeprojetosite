"use strict";
exports.__esModule = true;
exports.Artista = void 0;
var Artista = /** @class */ (function () {
    function Artista() {
    }
    Artista.prototype.inserirTexto = function (texto) {
        this.texto = texto;
    };
    Artista.prototype.inserirID = function (id) {
        this.id = id;
    };
    Artista.prototype.inserirNome = function (nome) {
        this.nome = nome;
    };
    Artista.prototype.inserirBiografia = function (biografia) {
        this.biografia = biografia;
    };
    Artista.prototype.inserirTituloUnico = function (titulo) {
        this.tituloUnico = titulo;
    };
    Artista.prototype.inserirTextoUnico = function (texto) {
        this.textoUnico = texto;
    };
    Artista.prototype.pegarTexto = function () {
        return this.texto;
    };
    Artista.prototype.pegarNome = function () {
        return this.nome;
    };
    Artista.prototype.pegarBiografia = function () {
        return this.biografia;
    };
    Artista.prototype.pegarTituloUnico = function () {
        return this.tituloUnico;
    };
    Artista.prototype.pegarTextoUnico = function () {
        return this.textoUnico;
    };
    return Artista;
}());
exports.Artista = Artista;
