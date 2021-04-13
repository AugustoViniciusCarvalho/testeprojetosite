import dramaturgias from "./Dramatrugia";

let titulo = localStorage.getItem("r");

for (let i = 0; i < dramaturgias.length; i++){
    if (titulo == dramaturgias[i].getTitulo()){
        let p = document.createElement("p");
        p.innerHTML = dramaturgias[i].getTexto();
        document.getElementById("texto").appendChild(p);
        let nomeObra = document.createElement("p");
        nomeObra.innerHTML = dramaturgias[i].getTituloPublico();
        nomeObra.id = "nome";
        document.getElementById("divNome").appendChild(nomeObra);

        if (dramaturgias[i].getAutor() != "desconhecido") {
            let nomeArtista = document.createElement("p");
        nomeArtista.innerHTML = dramaturgias[i].getAutorPublico();
        document.getElementById("titulodoc").appendChild(nomeArtista);
        let divArtista = document.createElement("div");
        divArtista.id = "escritoritens";
        let imagemArtista = document.createElement("img");
        imagemArtista.src = `./Artistas Imagens/${dramaturgias[i].getAutor()}.png`;
        divArtista.appendChild(imagemArtista);
        let a = document.createElement("a");
        a.href = `./artistasinfo.html`;
        localStorage.setItem("e", `${dramaturgias[i].getAutor()}`);
        a.appendChild(divArtista);
        document.getElementById("escritor").appendChild(a);
        }
        else{
            document.getElementById("titulodoc").remove()
            document.getElementById("escritor").remove()
        }
    } 
}