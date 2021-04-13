export class Obra{
    titulo: string;
    autor: string;
    link: string;
    tituloPublico: string;

    setTitulo(titulo: string){
        this.titulo = titulo;
    }

    setAutor(autor: string){
        this.autor = autor;
    }

    setLink(link: string){
        this.link = link;
    }

    setTituloPublico(titulo: string){
        this.tituloPublico = titulo;
    }

    getTitulo(): string{
        return this.titulo;
    }

    getAutor(): string{
        return this.autor;
    }

    getLink(): string{
        return this.link;
    }

    getTituloPublico(): string{
        return this.tituloPublico;
    }
}