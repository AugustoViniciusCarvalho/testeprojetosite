export class Dramaturgia{
    titulo: string;
    texto: string;
    tituloPublico: string;
    autor: string;
    autorPublico: string;

    setTitulo(titulo: string){
        this.titulo = titulo;
    }

    setTexto(texto: string){
        this.texto = texto;
    }

    setTituloPublico(titulo: string){
        this.tituloPublico = titulo;
    }

    setAutor(autor: string){
        this.autor = autor;
    }

    setAutorPublico(autor: string){
        this.autorPublico = autor;
    }

    getTitulo(): string{
        return this.titulo;
    }

    getTexto(): string{
        return this.texto;
    }

    getTituloPublico(): string{
        return this.tituloPublico;
    }

    getAutor(): string{
        return this.autor;
    }

    getAutorPublico(): string{
        return this.autorPublico;
    }
}

let dramaturgias: Array<Dramaturgia>;
dramaturgias = [];

let aabelinhasonhadora = new Dramaturgia();
aabelinhasonhadora.setTitulo("aabelinhasonhadora");
aabelinhasonhadora.setTexto("A Abelhinha Sonhadora é uma peça infantil, em dois atos, escrita por Nati Cortez, inspirada no conto “A Abelhinha Zumzum” de Maria Eugênia M. Monteiro. A peça conta com muita música e dança a jornada da abelhinha Zumzum fora da colmeia, após revoltar-se por ter que trabalhar para os zangões enquanto estes só desfrutam do trabalho. Durante sua jornada ela percebe como o mundo fora da colmeia pode ser hostil, mas também faz um novo amigo. Enquanto sua jornada acontece, as demais abelhas na colmeia preocupam-se com o sumiço de Zumzum e organizam-se para ir a procura dela. Em um final inusitado, descobre-se que está tudo bem com a abelhinha fujona e tudo volta a ordem da produção de mel como sempre. ");
aabelinhasonhadora.setTituloPublico("A Abelinha Sonhadora");
aabelinhasonhadora.setAutor("NatiCortez");
aabelinhasonhadora.setAutorPublico("Nati Cortez");
dramaturgias.push(aabelinhasonhadora);

let aguerradosplanetas = new Dramaturgia();
aguerradosplanetas.setTitulo("aguerradosplanetas");
aguerradosplanetas.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
aguerradosplanetas.setTituloPublico("A Guerra dos Planetas");
aguerradosplanetas.setAutor("NatiCortez");
aguerradosplanetas.setAutorPublico("Nati Cortez");
dramaturgias.push(aguerradosplanetas);

let aloucadamontanha = new Dramaturgia();
aloucadamontanha.setTitulo("aloucadamontanha");
aloucadamontanha.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
aloucadamontanha.setTituloPublico("A Louca da Montanha");
aloucadamontanha.setAutor("desconhecido");
dramaturgias.push(aloucadamontanha);

let amanhaquemsabe = new Dramaturgia();
amanhaquemsabe.setTitulo("amanhaquemsabe");
amanhaquemsabe.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
amanhaquemsabe.setTituloPublico("Amanhã Quem Sabe");
amanhaquemsabe.setAutor("desconhecido");
dramaturgias.push(amanhaquemsabe);

let aprovidencia = new Dramaturgia();
aprovidencia.setTitulo("aprovidencia");
aprovidencia.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
aprovidencia.setTituloPublico("A providência");
aprovidencia.setAutor("ManuelSWanderley");
aprovidencia.setAutorPublico("Manuel Segundo Wanderley");
dramaturgias.push(aprovidencia);

let astresdatas = new Dramaturgia();
astresdatas.setTitulo("astresdatas");
astresdatas.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
astresdatas.setTituloPublico("As Três Datas");
astresdatas.setAutor("ManuelSWanderley");
astresdatas.setAutorPublico("Manuel Segundo Wanderley");
dramaturgias.push(astresdatas);

let avemaria = new Dramaturgia();
avemaria.setTitulo("avemaria");
avemaria.setTexto("Ave-Maria é uma peça em ato único de Ponciano Barbosa que relata um fato acontecido na vida de quatro adoráveis mulheres: Anna, Yolanda, Helena e Clarisse, sendo Yolanda e Helena filhas de Anna e a criança Clarisse filha de Helena. Em certa ocasião Clarisse, muito amada por sua avó, fatidicamente adoece, retirando assim toda a sua característica energia. Anna em um ato de fé suplica a virgem Maria pela saúde de sua neta.");
avemaria.setTituloPublico("Ave-Maria");
avemaria.setAutor("PoncianoBarbosa");
avemaria.setAutorPublico("Ponciano Barbosa");
dramaturgias.push(avemaria);

let brasileiroseportugueses = new Dramaturgia();
brasileiroseportugueses.setTitulo("brasileiroseportugueses");
brasileiroseportugueses.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");brasileiroseportugueses.setTituloPublico("Brasileiros e Portugueses");
brasileiroseportugueses.setAutor("ManuelSWanderley");
brasileiroseportugueses.setAutorPublico("Manuel Segundo Wanderley");
dramaturgias.push(brasileiroseportugueses);

let cabecadomundo = new Dramaturgia();
cabecadomundo.setTitulo("cabecadomundo");
cabecadomundo.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
cabecadomundo.setTituloPublico("Cabeça do Mundo");
cabecadomundo.setAutor("MeiraPires");
cabecadomundo.setAutorPublico("Meira Pires");
dramaturgias.push(cabecadomundo);

let caodefila = new Dramaturgia();
caodefila.setTitulo("caodefila");
caodefila.setTexto("A peça escrita em parceria com Mário Lago conta a trama de Elizabeth, uma mulher fria e calculista que não mede perigos na hora de conseguir o que quer. Ao se enxergar ameaçada de perder seu marido se dispõe de loucuras para convencer a Nora, uma jovem e rica mulher que está prestes a começar um relacionamento com Tadeu, agora ex-marido de Elizabeth, que ele não é nada do que pensava sobre. <br> <br> Armada de mentiras e com a ajuda de Leonardo, ex-marido de Nora, ela cria diversos planos para não perder seu marido passando por cima de todos ao seu caminho e sem pudor de inventar histórias e um romance para enganar Nora que desiste de Tadeu que volta aos prantos para os braços de sua ex-mulher, assim como havia ela planejado.");
caodefila.setTituloPublico("Cão de Fila");
caodefila.setAutor("desconhecido");
dramaturgias.push(caodefila);

let compraseummarido = new Dramaturgia();
compraseummarido.setTitulo("compraseummarido");
compraseummarido.setTexto("Patrícia filha única de Castro tem considerações bem duras sobre o casamento e acredita que este não traz felicidade, nem realização. No entanto, o noivado de sua amiga causa uma angústia. A jovem que não gosta de ficar para trás em nada convence seu pai que é milionário a comprar para ela um marido. <br> <br> Marcos é o escolhido para possuir a mão da moça; O que ele não esperava era que a vida de riqueza era extremamente entediante e as regras impostas pela esposa não facilitavam sua vida.  O casamento era apenas de aparências, ou seja, nada de beijos ou trocas de afetos. Zélia, a amiga casada de Patrícia resolve visitá-la o que ocasiona em uma tentativa de acabar com falso romance entre ela e seus recém comprado marido. Entre muitas piadas sobre riqueza, luxo e os fúteis sentimentos dos personagens, Patrícia percebe que gosta muito de Marcos e faz o possível para que ele não fuja de seus braços. <br> <br> A obra ficou conhecida como a peça que colocou o Rio Grande do norte no mapa da dramaturgia nacional e foi a primeira escrita pelo autor.");
compraseummarido.setTituloPublico("Compra-se um Marido");
compraseummarido.setAutor("desconhecido");
dramaturgias.push(compraseummarido);

let dialogodasestrelas = new Dramaturgia();
dialogodasestrelas.setTitulo("dialogodasestrelas");
dialogodasestrelas.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
dialogodasestrelas.setTituloPublico("Diálogo das Estrelas");
dialogodasestrelas.setAutor("NatiCortez");
dialogodasestrelas.setAutorPublico("Nati Cortez");
dramaturgias.push(dialogodasestrelas);

let formacaorural = new Dramaturgia();
formacaorural.setTitulo("formacaorural");
formacaorural.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
formacaorural.setTituloPublico("Formação Rural");
formacaorural.setAutor("SantaGuerra");
formacaorural.setAutorPublico("Santa Guerra");
dramaturgias.push(formacaorural);

let oanjodameianoite = new Dramaturgia();
oanjodameianoite.setTitulo("oanjodameianoite");
oanjodameianoite.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
oanjodameianoite.setTituloPublico("O anjo da Meia Noite");
oanjodameianoite.setAutor("ManuelSWanderley");
oanjodameianoite.setAutorPublico("Manuel Segundo Wanderley");
dramaturgias.push(oanjodameianoite);

let ocarrasco = new Dramaturgia();
ocarrasco.setTitulo("ocarrasco");
ocarrasco.setTexto("A peça se inicia com a presença de um narrador que conta a história de um homem que já vivera muitas frustrações, mas conseguira superá-las. Aos poucos, a narração vai crescendo ao ponto do narrador se relevar ser esse homem, o carrasco. Este é a figura militar estereotipada. Não nasceu com privilégios, mas ao provar o gosto do poder não teve dúvida de que era aquilo que o alimentava. <br> <br> Após uma longa descrição expondo todas suas indignações contra aqueles que sujam a moral do país, surge um jovem que é torturado pelo narrador/personagem, logo após surge o pai do garoto que lamenta a situação e explica que nunca dera mal educação ao filho, culpando a mãe que era impura quando se cassaram. <br> <br> Um blackout separa a cena com a volta do carrasco para sua narração na qual conta uma visão que teve em sonho em que subia aos céus e era ordenado por Deus a torturar os anjos maus, lá encontrara uma mulher que lhe conta uma história terrível de um casal que havia perdido a filha. A garota tinha desaparecido e provavelmente tinha sido morta pelo poder vigente no país. Entediado com a história que a moça lhe contara o carrasco dorme como se não houvesse nada de horrível sobre naquilo.");
ocarrasco.setTituloPublico("O carrasco");
ocarrasco.setAutor("desconhecido");
dramaturgias.push(ocarrasco);

let onatalnoespacosideral = new Dramaturgia();
onatalnoespacosideral.setTitulo("onatalnoespacosideral");
onatalnoespacosideral.setTexto("O Natal no espaço Sideral é uma comédia para crianças que aborda o primeiro dia de Natal do mundo, o dia do nascimento de Cristo. Escrita por Nati Cortez, a autora se utiliza da ferramenta de personificação das estrelas para explicar de forma lúdica para crianças como ocorreu a jornada dos três reis magos para o encontro do filho de Deus em seu leito de nascimento. <br> <br> A Estrela de Belém se faz a protagonista dessa narrativa para conduzir os reis, e ao longo da jornada as demais estrelas se perguntam do seu paradeiro no céu, sem saber que ela foi a terra acompanhar “pessoalmente” os reis magos.");
onatalnoespacosideral.setTituloPublico("O Natal no Espaço Sideral");
onatalnoespacosideral.setAutor("NatiCortez");
onatalnoespacosideral.setAutorPublico("Nati Cortez");
dramaturgias.push(onatalnoespacosideral);

let omenordosmeusirmaos = new Dramaturgia();
omenordosmeusirmaos.setTitulo("omenordosmeusirmaos");
omenordosmeusirmaos.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
omenordosmeusirmaos.setTituloPublico("O Menor dos Meus Irmãos");
omenordosmeusirmaos.setAutor("SantaGuerra");
omenordosmeusirmaos.setAutorPublico("Santa Guerra");
dramaturgias.push(omenordosmeusirmaos);

let osanjosdoclaustro = new Dramaturgia();
osanjosdoclaustro.setTitulo("osanjosdoclaustro");
osanjosdoclaustro.setTexto("O Asilo da Paz e da Misericórdia é comandado pela madre superiora e pelo Padre Capelão recebe crianças e enfermos para serem cuidados. Nada os diferenciava dos demais lares de apoio presente na época, porém um Juiz decide elaborar um mandato de expulsão de todos os conventos da França, pois segundo o mesmo, estes eram parasitas que impediam a progressão do país. O Juiz é um homem muito rancoroso e cético. <br> <br> Ele manda vários oficiais para invadir o convento e expulsar todos de lá, no entanto, as missões são sempre falhas devido ao respeito que os oficiais tinham pelas irmãs e o trabalho que estas realizam. Então, o próprio juiz resolve ir ao convento e pôr um ponto final nessa história, porém ele não esperava que encontraria o padre que cuidou dele quando criança após o falecimento do pai. <br> <br> O juiz ficou extremamente chocado com o que o decreto dele poderia fazer para aquelas pessoas que um dia já haviam o ajudado, e então resolve acabar com o decreto em forma de agradecimento.");
osanjosdoclaustro.setTituloPublico("Os Anjos do Claustro");
osanjosdoclaustro.setAutor("ManuelSWanderley");
osanjosdoclaustro.setAutorPublico("Manuel Segundo Wanderley");
dramaturgias.push(osanjosdoclaustro);

let pelasgrades = new Dramaturgia();
pelasgrades.setTitulo("pelasgrades");
pelasgrades.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
pelasgrades.setTituloPublico("Pelas Grandes");
pelasgrades.setAutor("JorgeFernandes");
pelasgrades.setAutorPublico("Jorge Fernandes");
dramaturgias.push(pelasgrades);

let pertinhodoceu = new Dramaturgia();
pertinhodoceu.setTitulo("pertinhodoceu");
pertinhodoceu.setTexto("André é jornalista e tem como grandes amigos o casal Mozart e Margarita, todos estes vivem na periferia e sonham em um dia alcançar o sucesso. André ao substituir um colunista no jornal local resolve escrever uma crítica rasgando elogios a Mirna Marengo, atriz que se encontra no pico de riqueza e fama. Ao ler a crítica escrita pelo jovem moço, liga para o jornal em agradecimento o que gera de cara uma boa relação com André. Planejam os dois se encontrarem na casa de Mozart que, apesar de muito humilde estava bastante arrumada, pois na noite do encontro era o aniversário de Margarida. <br> <br> Após o encontro os dois têm certeza da conexão que sentiram com o primeiro contato por telefone e meses depois se casam. André não se dá muito bem com a vida de riqueza que conquistou depois do casamento, sente saudades da vida no subúrbio com seus amigos. Mirna recebe uma proposta para fazer uma turnê fora do país e numa visita de Mozart e Margarida a mansão dos recém casados, as duas mulheres conversam e Margarita confessa que nunca vira André tão triste. <br> <br> Mirna resolve aceitar fazer a turnê e a conselho de Margarita resolve se separar de André, pois amando-o reconhecia que aquela vida não era para ele. André volta a antiga vida devastado por ter perdido o grande amor de sua vida, o que ele não contava era que sua amada voltaria para se despedir e explicar tudo o que acontecera.");
pertinhodoceu.setTituloPublico("Pertinho do Céu");
pertinhodoceu.setAutor("desconhecido");
dramaturgias.push(pertinhodoceu);

let seusoldonalua = new Dramaturgia();
seusoldonalua.setTitulo("seusoldonalua");
seusoldonalua.setTexto("Seu Sol, Dona Lua é uma peça musical infantil escrita por Marcos Sá em 1976. Em um ato único, a peça nos apresenta quatro personagens: Tempo, Tempinho, Sol e Lua, os quais são personificados e adquirem trejeitos e sentimentos. <br> <br> Em um enredo muito cantado e cativante, Sá mostra-nos o dilema do Tempo em permitir o casamento de dois astros muito apaixonados, o Sol e a Lua. Esses os quais foram apresentados e intermediados pelo Tempinho. Nesse meio tempo, o próprio Tempo aprende a importância do amor e o quanto amava seu filho adotivo, o tempinho.");
seusoldonalua.setTituloPublico("Seu Sol, Dona Lua");
seusoldonalua.setAutor("desconhecido");
dramaturgias.push(seusoldonalua);

let umjardimchamadogetsemani = new Dramaturgia();
umjardimchamadogetsemani.setTitulo("umjardimchamadogetsemani");
umjardimchamadogetsemani.setTexto("Um Jardim Chamado Getsêmani se passa em uma pequena província durante uma revolução. Ao passo que todo o local foi sendo tomado pelos inimigos a igreja tornou-se centro de resistência de três soldados de defesa local, que se acreditava serem os últimos, o tenente e dois soldados: Tiago e Simão. <br> <br> Enquanto escutavam os inimigos aproximando-se e o luz do sol esvair-se com o fim do dia, questionamentos sobre medo, morte, sacrifícios, liberdade e traição eram levantados. Conforme cada pensamento desses crescia dentro de cada um, devaneios surgiam, ao ponto de que um deles arrependeu-se profundamente das palavras que fatidicamente saíram de seu pensamento.");
umjardimchamadogetsemani.setTituloPublico("Um Jardim Chamado Getsêmani");
umjardimchamadogetsemani.setAutor("NewtonNavarro");
umjardimchamadogetsemani.setAutorPublico("Newton Navarro");
dramaturgias.push(umjardimchamadogetsemani);

let umrestodehomem = new Dramaturgia();
umrestodehomem.setTitulo("umrestodehomem");
umrestodehomem.setTexto("Sed accumsan nulla in justo egestas pretium. Donec quam urna, commodo in ex sit amet, laoreet tempor purus. Integer quis tortor luctus, interdum lorem id, pulvinar lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel vulputate ipsum. Nunc id pretium sem. Vivamus semper orci id ligula euismod pharetra. Integer non orci eget eros porttitor ultrices mollis eget sem. Pellentesque quis molestie massa. Aliquam vel mauris porta, posuere magna molestie, molestie neque. In in viverra odio. Nam dictum tincidunt enim, id volutpat enim blandit vel. Pellentesque suscipit sit amet nisi vel accumsan. Mauris non elit faucibus, dapibus nulla eu, aliquet ex. Suspendisse sit amet magna sed eros aliquam efficitur sed interdum ligula. Pellentesque a leo orci. <br> <br> Sed cursus rhoncus egestas. Sed consectetur odio ipsum, vitae sagittis purus luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc finibus ornare libero a consectetur. Vestibulum eget facilisis ante, vel placerat mi. Nunc cursus purus vel semper semper. Vivamus nunc odio, scelerisque vitae libero in, lacinia interdum enim. Nullam non aliquam lacus. Pellentesque quis venenatis nisl. Fusce nec laoreet lacus. Pellentesque nibh eros, pellentesque sit amet massa non, dignissim dapibus felis. Donec rutrum dignissim ante, eu iaculis nisi pulvinar at. Vivamus a ligula nec ex placerat rhoncus. Proin cursus, libero suscipit sollicitudin pulvinar, neque dui tincidunt ante, non consectetur mi nisi vitae odio. Phasellus vulputate nisi congue nisi maximus, lacinia placerat risus sodales.");
umrestodehomem.setTituloPublico("Um Resto de Homem");
umrestodehomem.setAutor("MeiraPires");
umrestodehomem.setAutorPublico("Meira Pires");
dramaturgias.push(umrestodehomem);


export default dramaturgias;