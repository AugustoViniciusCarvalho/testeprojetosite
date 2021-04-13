export class Artista{
    texto: string;
    id: string;
    nome: string;
    biografia: string;
    tituloUnico: string;
    textoUnico: string;

    inserirTexto(texto: string){
        this.texto = texto;
    }

    inserirID(id: string){
        this.id = id;
    }

    inserirNome(nome: string){
        this.nome = nome;
    }

    inserirBiografia(biografia: string){
        this.biografia = biografia;
    }

    inserirTituloUnico(titulo: string){
        this.tituloUnico = titulo;
    }

    inserirTextoUnico(texto: string){
        this.textoUnico = texto;
    }

    pegarTexto(): string{
        return this.texto;
    }

    pegarNome(): string{
        return this.nome;
    }

    pegarBiografia(): string{
        return this.biografia;
    }

    pegarTituloUnico(): string{
        return this.tituloUnico;
    }

    pegarTextoUnico(): string{
        return this.textoUnico;
    }
}