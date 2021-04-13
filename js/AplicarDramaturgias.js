"use strict";
exports.__esModule = true;
var Dramatrugia_1 = require("./Dramatrugia");
var titulo = localStorage.getItem("r");
for (var i = 0; i < Dramatrugia_1["default"].length; i++) {
    if (titulo == Dramatrugia_1["default"][i].getTitulo()) {
        var p = document.createElement("p");
        p.innerHTML = Dramatrugia_1["default"][i].getTexto();
        document.getElementById("texto").appendChild(p);
        var nomeObra = document.createElement("p");
        nomeObra.innerHTML = Dramatrugia_1["default"][i].getTituloPublico();
        nomeObra.id = "nome";
        document.getElementById("divNome").appendChild(nomeObra);
        if (Dramatrugia_1["default"][i].getAutor() != "desconhecido") {
            var nomeArtista = document.createElement("p");
            nomeArtista.innerHTML = Dramatrugia_1["default"][i].getAutorPublico();
            document.getElementById("titulodoc").appendChild(nomeArtista);
            var divArtista = document.createElement("div");
            divArtista.id = "escritoritens";
            var imagemArtista = document.createElement("img");
            imagemArtista.src = "./Artistas Imagens/" + Dramatrugia_1["default"][i].getAutor() + ".png";
            divArtista.appendChild(imagemArtista);
            var a = document.createElement("a");
            a.href = "./artistasinfo.html";
            localStorage.setItem("e", "" + Dramatrugia_1["default"][i].getAutor());
            a.appendChild(divArtista);
            document.getElementById("escritor").appendChild(a);
        }
        else {
            document.getElementById("titulodoc").remove();
            document.getElementById("escritor").remove();
        }
    }
}
