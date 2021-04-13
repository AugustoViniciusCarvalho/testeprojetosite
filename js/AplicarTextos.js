"use strict";
exports.__esModule = true;
var TextosArtistas_1 = require("./TextosArtistas");
var e = localStorage.getItem("e");
var texto = document.getElementById("texto");
var nome = document.getElementById("nome");
var textoBiografia = document.getElementById("introducaoTexto");
var titulounico = document.getElementById("titulounico");
var textounico = document.getElementById("textounico");
var artista = TextosArtistas_1["default"].acharArtista(e);
nome.innerHTML = artista.pegarNome();
texto.innerHTML = artista.pegarTexto();
console.log(artista.pegarBiografia());
if (artista.pegarBiografia() == undefined) {
    document.getElementById("titulobio").remove();
    document.getElementById("introducao").remove();
}
else {
    textoBiografia.innerHTML = artista.pegarBiografia();
}
if (artista.pegarTextoUnico() == undefined) {
    document.getElementById("titulounico").remove();
    document.getElementById("textounico").remove();
}
else {
    titulounico.innerHTML = artista.pegarTituloUnico();
    textounico.innerHTML = artista.pegarTextoUnico();
}
