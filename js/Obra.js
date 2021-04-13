"use strict";
exports.__esModule = true;
exports.Obra = void 0;
var Obra = /** @class */ (function () {
    function Obra() {
    }
    Obra.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Obra.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Obra.prototype.setLink = function (link) {
        this.link = link;
    };
    Obra.prototype.setTituloPublico = function (titulo) {
        this.tituloPublico = titulo;
    };
    Obra.prototype.getTitulo = function () {
        return this.titulo;
    };
    Obra.prototype.getAutor = function () {
        return this.autor;
    };
    Obra.prototype.getLink = function () {
        return this.link;
    };
    Obra.prototype.getTituloPublico = function () {
        return this.tituloPublico;
    };
    return Obra;
}());
exports.Obra = Obra;
