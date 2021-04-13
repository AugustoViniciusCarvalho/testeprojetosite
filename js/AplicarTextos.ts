import textos from "./TextosArtistas";

let e = localStorage.getItem("e");

let texto = document.getElementById("texto");

let nome = document.getElementById("nome");

let textoBiografia = document.getElementById("introducaoTexto");

let titulounico = document.getElementById("titulounico");

let textounico = document.getElementById("textounico");

let artista = textos.acharArtista(e);

nome.innerHTML = artista.pegarNome();

texto.innerHTML = artista.pegarTexto();

console.log(artista.pegarBiografia());

if (artista.pegarBiografia() == undefined){
  document.getElementById("titulobio").remove();
  document.getElementById("introducao").remove();
} else {
  textoBiografia.innerHTML = artista.pegarBiografia();
}

if (artista.pegarTextoUnico() == undefined){
  document.getElementById("titulounico").remove();
  document.getElementById("textounico").remove();
} else {
  titulounico.innerHTML = artista.pegarTituloUnico();
  textounico.innerHTML = artista.pegarTextoUnico();
}