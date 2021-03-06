(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./TextosArtistas":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.TextosArtistas = void 0;
var Artista_1 = require("./Artista");
var TextosArtistas = /** @class */ (function () {
    function TextosArtistas() {
        this.artistas = [];
    }
    TextosArtistas.prototype.inserirArtista = function (artista) {
        this.artistas.push(artista);
    };
    TextosArtistas.prototype.acharArtista = function (id) {
        for (var i = 0; i < this.artistas.length; i++) {
            if (id == this.artistas[i].id) {
                return this.artistas[i];
            }
        }
    };
    return TextosArtistas;
}());
exports.TextosArtistas = TextosArtistas;
var textos = new TextosArtistas();
var grimariofarias = new Artista_1.Artista();
grimariofarias.inserirTexto("Grim??rio Farias da Costa ?? um ator e dramaturgo potiguar, nascido em Coronel Ezequiel (na ??poca munic??pio de Santa Cruz/RN), viveu no munic??pio at?? os 4 anos de idade e posteriormente se mudou para o Paran??, vivendo em duas cidades, Guaira??a e Amapor??. ");
grimariofarias.inserirID("grimariofarias");
grimariofarias.inserirNome("Grim??rio Farias");
grimariofarias.inserirBiografia("Aos 18 anos voltou para Natal para estudar direito na Universidade Federal do Rio Grande do Norte. Durante suas f??rias promovia eventos culturais em sua cidade natal e a partir da?? o interesse pelo teatro nasce. Foi ap??s assistir o espet??culo ???Augusto dos Anjos: Poeta e cidad??o Brasileiro??? que o influenciou totalmente a tomar o rumo do teatro, assistiu a pe??a mais de dez vezes e decorou tudo. Encontrou-se com um conhecido em Santa Cruz e o mesmo sugeriu que ele fizesse teatro. Ao voltar para Natal, esse mesmo conhecido o convidou para participar do espet??culo ???A Ampulheta e o Espelho??? em 1973. Durante as apresenta????es dessa pe??a recebeu o convite para integrar a companhia teatral ???Novo Universit??rio???, e durante pela ditadura militar, em 1974, estreou o espet??culo ???A Pena e a Lei???. Participou, tamb??m, ativamente de projetos como ???Natal em Natal???, do grupo ???Carpintaria Teatral??? e de 1985 at?? 2017 do grupo ???Alegria Alegria???. Tamb??m se especializou pela UFRN em ensino de teatro. Atualmente ?? diretor do teatro, infelizmente fechado, Sandoval Wanderlei, localizado no bairro Alecrim. Considera sua maior especialidade o teatro de rua.");
textos.inserirArtista(grimariofarias);
var ivonetealbano = new Artista_1.Artista();
ivonetealbano.inserirTexto("Ivonete Albano Bezerra nasceu em Jucurutu, no Serid?? do Rio Grande do Norte, em 10 de maio de 1956. Atriz, desde crian??a j?? se interessava pelo lado art??stico, cantando dramas e montando pequenos trechos, que apresentava em piqueniques e eventos enquanto participava do movimento Bandeirante, na ??poca, para meninas. Em 1970, na adolesc??ncia, recebeu a primeira proposta para participar de um espet??culo no teatro Severino Cabral, em Campina Grande, cidade na qual passou a residir.");
ivonetealbano.inserirID("ivonetealbano");
ivonetealbano.inserirNome("Ivonete Albano");
ivonetealbano.inserirBiografia("Em 1975, migra para Natal, no intuito de fazer uma faculdade p??blica. Em 1977, ingressou no curso de Educa????o Art??stica da UFRN. No mesmo ano, participou do grupo Teatro Novo Universit??rio (TONUS), na ??poca dirigido por Carlos Furtado. Come??ou a frequentar o grupo como contrarregra e depois ficou oficializada como atriz, no elenco da TV Universit??ria ??? uma ??tima oportunidade na ??poca, pois os artistas tinham suas carteiras assinadas o que, al??m de oferecer um sal??rio, tamb??m significava o reconhecimento da profiss??o. <br> <br> Quando deixou o grupo TONUS, participou do Grupo Teimosia, que tinha um vi??s social em fun????o dos movimentos estudantis que afloraram na reta final da ditadura, em 1980. Em 1982, iniciou na Federa????o de Teatro Amador do Rio Grande do Norte, que assumiu durante dois anos e pela qual realizou o Primeiro Festival de Teatro Amador de Natal. <br> <br> Participou clandestinamente do Partido Comunista Brasileiro (PCB), a parir das reuni??es e para explorar o vi??s pol??tico do teatro, Ivonete Albano criou o Grupo Estandarte de Teatro, formado com algumas pessoas que compartilhavam a causa. O primeiro espet??culo do grupo se chamou A Greve, estreado na Cidade Nova, em Natal. Ademais, ela foi diretora do Teatro Alberto Maranh??o (TAM).");
textos.inserirArtista(ivonetealbano);
var AntonioSouza = new Artista_1.Artista();
AntonioSouza.inserirTexto("Nascido em uma regi??o que hoje corresponde a N??sia Floresta, Ant??nio atuou como promotor p??blico e assumiu o governo do estado oito vezes.  Escrevia utilizando o pseud??nimo de Polycarpo Feitosa. Sua obra conta com diversos romances, contos e poemas. Para o teatro s?? escrevera somente uma com??dia intitulada ???Qual o mais forte???? encenada em 1928 no Teatro Carlos Gomes.");
AntonioSouza.inserirID("AntonioSouza");
AntonioSouza.inserirNome("Ant??nio Souza");
textos.inserirArtista(AntonioSouza);
var CarolinaWanderley = new Artista_1.Artista();
CarolinaWanderley.inserirTexto("Nascida em Ass?? foi professora, poeta e dramaturga. Lecionou durante boa parte de sua vida e ap??s aposentada fundou a revista ???Via L??ctea???. Publicou livros de poesia e pe??as, dentre estas: ???Ao Espelho???, ???Escudo do Rio Grande do Norte???, ???O Prisioneiro???, ???O Chap??u de Plumas???, ???Neste Dia??? e ???Ardores em Festa???, grande parte delas s??o revistas infantis. Devido sua contribui????o ?? literatura potiguar pertenceu a Academia Norte-rio-grandense de Letras.");
CarolinaWanderley.inserirID("CarolinaWanderley");
CarolinaWanderley.inserirNome("Carolina Wanderley");
textos.inserirArtista(CarolinaWanderley);
var ChicutaFernandes = new Artista_1.Artista();
ChicutaFernandes.inserirTexto("Francisca Nolasco Fernandes ou simplesmente Chicuta Nolasco foi uma professora, escritora e jornalista, nascida em 15 de dezembro de 1908 em Jardim de Piranhas e falecida em 10 de junho de 1995. Foi casada com o Dr.T??lio Fernandes de Oliveira e teve quatro filhos: Hilma Fernandes de Matos Serejo, T??lio Fernandes de Oliveira Filho, Sebasti??o Fernandes de Oliveira Neto e Caio Fl??vio Fernandes de Oliveira. Foi autora da obra ???A Menina Feia e Amarelinha???, publicada em Natal, em 1973 e no ramo da dramaturgia, foi respons??vel pela escrita de duas revistas: As Tr??s Gra??as (em um ato, 1935); Nosso Brasil (em dois atos) encenadas, posteriormente no Teatro Carlos Gomes (atual Teatro Alberto Maranh??o) respectivamente em novembro de 1935 e em novembro de 1942).");
ChicutaFernandes.inserirID("ChicutaFernandes");
ChicutaFernandes.inserirNome("Chicuta Fernandes");
textos.inserirArtista(ChicutaFernandes);
var ClaricePalma = new Artista_1.Artista();
ClaricePalma.inserirTexto("Clarice foi poeta e atriz, come??ou sua atua????o no Conjunto Teatral Potiguar, do qual se tem registro de dois trabalhos da atriz: ???Quando o Amor Renasce??? e ???A Cega???, ambas representadas no Teatro Carlos Fomes na d??cada de 1940. Posteriormente, ela mesma criou seu grupo teatral chamado Clube dos Sete.");
ClaricePalma.inserirID("ClaricePalma");
ClaricePalma.inserirNome("Clarice Palma");
textos.inserirArtista(ClaricePalma);
var ClementinoJunior = new Artista_1.Artista();
ClementinoJunior.inserirTexto("Clementino C??mara J??nior, nascido em Natal no dia 31 de mar??o de 1920, ?? o autor de uma ??nica alta comedia ???O Destino de Cada Um??? (3 atos), que foi representada no Teatro Carlos Gomes (atual Teatro Alberto Maranh??o), em dezembro de 1944 pelo Gr??mio Dram??tico de Natal. Mudou-se em 1945 para o Rio de Janeiro para exercer Jornalismo.");
ClementinoJunior.inserirID("ClementinoJunior");
ClementinoJunior.inserirNome("Clementino Junior");
textos.inserirArtista(ClementinoJunior);
var CostaFilho = new Artista_1.Artista();
CostaFilho.inserirTexto('Costa teve seu primeiro contato com o teatro aos 11 anos em uma pe??a escolar. Na vida adulta atuou como diretor, cen??grafo e ator. O artista j?? contribui com montagens de pe??as de Racine Santos. Como ator, se destaca na sua participa????o em ???Negrinha??? da d??cada de 80 e "Enveredamos pelas lendas ind??genas e compomos Tucu??". ');
CostaFilho.inserirID("CostaFilho");
CostaFilho.inserirNome("Costa Filho");
textos.inserirArtista(CostaFilho);
var DeolindoLima = new Artista_1.Artista();
DeolindoLima.inserirTexto('Nascido na cidade de A??u, era l??der da Ma??onaria do estado. Escreveu para diversos jornais, escreveu dois cadernos de poesia e seresteiro. Para o teatro, contribuiu somente com a revista ???Reino das Fitas??? de 1916.');
DeolindoLima.inserirID("DeolindoLima");
DeolindoLima.inserirNome("Deolindo Lima");
textos.inserirArtista(DeolindoLima);
var EiderMeneses = new Artista_1.Artista();
EiderMeneses.inserirTexto('Eider Furtado de Mendon??a e Meneses foi um jornalista e advogado potiguar, nascido em 23 de mar??o de 1924 e falecido em 6 de novembro de 2019. Escreveu e encenou em dezembro de 1942 a pe??a em 2 atos ???Feira de Casamentos???.');
EiderMeneses.inserirID("EiderMeneses");
EiderMeneses.inserirNome("Eider Meneses");
textos.inserirArtista(EiderMeneses);
var EzequielWanderley = new Artista_1.Artista();
EzequielWanderley.inserirTexto("Eider Furtado de Mendon??a e Meneses foi um jornalista e advogado potiguar, nascido em 23 de mar??o de 1924 e falecido em 6 de novembro de 2019. Escreveu e encenou em dezembro de 1942 a pe??a em 2 atos ???Feira de Casamentos???.");
EzequielWanderley.inserirID("EzequielWanderley");
EzequielWanderley.inserirNome("Ezequiel Wanderley");
textos.inserirArtista(EzequielWanderley);
var FilgueiraFilho = new Artista_1.Artista();
FilgueiraFilho.inserirTexto("Filgueira Filho foi um m??dico, jornalista e comedi??grafo nascido em outubro de 1912 em Mossor?? e falecido em Belo Horizonte/MG, em novembro de 1947. <br> <br> ?? autor das pe??as: Que loucura, Leonor! (vaudeville, encenado no Teatro Carlos Gomes em dezembro de 1932 pelo grupo amador Conjunto Alma do Norte); O Galante Baltazar (com??dia em 2 atos encenada em 1933); Zez?? (em parceria com Elp??dio C??mara, encenada pela Companhia Brasileira de Com??dia em 1936); Amor ?? sempre amor (com??dia encenada em julho de 1940); A Mulher de Porcelana e Mucambo (em parceria com o autor e diretor pernambucano Waldemar de Oliveira, com  mais de 20 apresenta????es no Teatro Santa Isabel em Recife/PE).");
FilgueiraFilho.inserirID("FilgueiraFilho");
FilgueiraFilho.inserirNome("Filgueira Filho");
textos.inserirArtista(FilgueiraFilho);
var FranciscoCavalcanti = new Artista_1.Artista();
FranciscoCavalcanti.inserirTexto("Ivo foi jornalista, poeta, contista, professor, advogado e dramaturgo. Nascido em Natal no ano de 1886, sua produ????o teatral era focada em quest??es sociais e psicol??gicas como a complexidade do ser e a luta de classes. Dentre suas principais obras est??o: ???S??nia???, ???Al??m???, ???O Flagelo (musical)??? e ???Ren??ncia???. ");
FranciscoCavalcanti.inserirID("FranciscoCavalcanti");
FranciscoCavalcanti.inserirNome("Francisco Cavalcanti");
textos.inserirArtista(FranciscoCavalcanti);
var GeraldoOliveira = new Artista_1.Artista();
GeraldoOliveira.inserirTexto("Geraldo Fernandes de Oliveira foi um desembargador nascido dia 19 de novembro de 1915 em Cear??-Mirim, filho de Sebasti??o Fernandes de Oliveira, foi respons??vel por uma ??nica alta com??dia: E a Felicidade? (encenada no Teatro Carlos Gomes (atual Teatro Alberto Maranh??o) em mar??o de 1936 pelo Departamento de Teatro do Centro Estadual Potyguar).");
GeraldoOliveira.inserirID("GeraldoOliveira");
GeraldoOliveira.inserirNome("Geraldo Oliveira");
textos.inserirArtista(GeraldoOliveira);
var HenriqueSousa = new Artista_1.Artista();
HenriqueSousa.inserirTexto("Henrique era poeta, jornalista e vice-governador do Rio Grande do Norte duas vezes. ?? considerado um grande nome na literatura potiguar especialmente por seus poemas, estes que escrevia desde jovem. No teatro contribuiu escrevendo ???Suprema Dor???, ???O Enjeitado??? (inspirado em ?????dipo-Rei???) e ???A promessa???, sendo essa a ??nica que se tem registro de apresenta????o. Suas pe??as e romances s??o em maior parte dramas.");
HenriqueSousa.inserirID("HenriqueSousa");
HenriqueSousa.inserirNome("Henrique Sousa");
textos.inserirArtista(HenriqueSousa);
var IsabelGondim = new Artista_1.Artista();
IsabelGondim.inserirTexto("Registrada por S??nia Othon como a primeira mulher a redigir pe??as de teatro em Natal, com a obra ???O Sacrif??cio do Amor??? (1909). Gondim foi educadora e ?? considerada uma das primeiras mulheres intelectuais do estado.");
IsabelGondim.inserirID("IsabelGondim");
IsabelGondim.inserirNome("Isabel Gondim");
textos.inserirArtista(IsabelGondim);
var JaymeWanderley = new Artista_1.Artista();
JaymeWanderley.inserirTexto("Jayme dos Guimar??es Wanderley foi um poeta, dramaturgo, romancista, ensa??sta, bi??grafo, memorialista, cronista, jornalista e r??dio novelista (inclusive, o primeiro que escreveu radionovelas em Natal) que participou da funda????o da Academia Potiguar de Letras e da Academia de Trovas, e ocupou a cadeira 23 da Academia Norte-rio-grandense de Letras.");
JaymeWanderley.inserirID("JaymeWanderley");
JaymeWanderley.inserirNome("Jayme Wanderley");
JaymeWanderley.inserirBiografia("Nascido em Natal dia 6 de julho de 1897, filho de Celestino Carlos Wanderley e Ana Guimar??es Wanderley, integrou tamb??m grupos de teatro amador, o Instituto Hist??rico e Geogr??fico do Rio Grande do Norte; foi Presidente do Clube de Poesia. Sua primeira pe??a ???O Homem que Perdeu a Alma??? foi encenada no Teatro Carlos Gomes (atual Alberto Teatro Maranh??o) e no Teatro Santa Rosa (Jo??o Pessoa/PB) em 1952, tendo Meira Pires no papel principal. Escreveu tamb??m ???Reencontro de Deuses??? e ???Algu??m Chorou a Perdida???. Pela primeira vez no teatro Natalense, em 1967, um drama trata sobre a revolu????o de 1964, sendo esse ???Dinor?????. Jayme Wanderley faleceu em 24 de fevereiro de 1986.");
textos.inserirArtista(JaymeWanderley);
var JoaoLeite = new Artista_1.Artista();
JoaoLeite.inserirTexto("Jo??o ?? natural de Currais Novos, executou praticamente todas as fun????es que se pode fazer no teatro (diretor, maquiador, cen??grafo, figurinista, dramaturgo, ator, entre outros). ?? mestrado em letras e tem uma longa lista de pe??as em que trabalhou. Dentre suas obras ?? destaque ???A Encruzilhada Hamlet??? de 2009. Hoje, atua como docente na UFPE em mais de cinco disciplinas.");
JoaoLeite.inserirID("JoaoLeite");
JoaoLeite.inserirNome("Jo??o Leite");
textos.inserirArtista(JoaoLeite);
var JoaquimFagundes = new Artista_1.Artista();
JoaquimFagundes.inserirTexto("Fagundes era uma figura pol??mica por suas ??rduas cr??ticas ao governo e a igreja. Era poeta, jornalista e dramaturgo. ???Vieira de Castro???, ???A m??o de Deus???, ???A Queda de um Anjo??? e ???A Queda de Susbel??? s??o suas obras que carregavam tamb??m o criticismo dele sobre a sociedade da cidade Natal.");
JoaquimFagundes.inserirID("JoaquimFagundes");
JoaquimFagundes.inserirNome("Joaquim Fagundes");
textos.inserirArtista(JoaquimFagundes);
var JoaquimMaranhao = new Artista_1.Artista();
JoaquimMaranhao.inserirTexto("Irm??o de Alberto Maranh??o, governador da ??poca, Joaquim inclui em sua produ????o as obras ???Canela de Ferro???, ???Diabo e Carne??? e ???Jerimum...N??o h??!...???, todas com??dias que tamb??m foram encenadas e musicadas pelo autor. Scipi??o tamb??m fora o primeiro diretor do Teatro Alberto Maranh??o e lecionava aulas de m??sica no local.");
JoaquimMaranhao.inserirID("JoaquimMaranhao");
JoaquimMaranhao.inserirNome("Joaquim Maranh??o");
textos.inserirArtista(JoaquimMaranhao);
var JorgeFernandes = new Artista_1.Artista();
JorgeFernandes.inserirTexto('Jorge Fernandes de Oliveira nasceu na cidade de Natal, no Rio Grande do Norte, em 22 de agosto 1887 e faleceu no mesmo local, em 17 de julho de 1953. Filho do professor Manuel Fernandes de Oliveira e de Francisca Fagundes de Oliveira.');
JorgeFernandes.inserirID("JorgeFernandes");
JorgeFernandes.inserirNome("Jorge Fernandes");
JorgeFernandes.inserirBiografia('Foi um importante dramaturgo, produziu pe??as, livros, poemas e revistas. Conforme S??nia Othon (1889, p.54), ele ?? considerado ???o pai da poesia moderna no Rio Grande do Norte???, considerado inovador em suas produ????es. Dentre elas, destacamos a pe??a denominada Pelas Grandes (1915), no estilo Grand Guignol, seguindo uma tend??ncia francesa do final do s??culo dezenove. Algumas de suas obras foram encenadas pelo grupo ???Sociedade Dram??tica Henrique Castriciano???, em abril de 1915, e pela ???Sociedade Gr??mio Dram??tico???. Conforme afirma ??ngela Melo (1999, p.42), as produ????es do autor no campo da dramaturgia foram muitas, ???nos mais variados estilos, da com??dia ao drama, das revistas ?? pe??as patri??ticas???. Ainda segundo afirma a autora (1999, p.42), ???Jorge Fernandes colaborou em diversos jornais e revistas e publicou em 1909, o livro de estr??ia [sic] "Contos & Tro??as-Loucuras", em colabora????o com Ivo Filho. Em 1927, publicou o "Livro de Poemas", em versos modernos???.');
textos.inserirArtista(JorgeFernandes);
var JorgeOliveira = new Artista_1.Artista();
JorgeOliveira.inserirTexto('Jorge Fernandes de Oliveira foi um dramaturgo, poeta, contista e cronista potiguar. Nascido em Natal dia 22 de agosto de 1887 e falecido dia 17 de julho de 1953, era filho do professor Manoel Fernandes de Oliveira e de Francisca Fagundes Fernandes. Autor do livro ???Livro de Poemas de Jorge Fernandes??? (1927), foi um dos principais respons??veis pela precurs??o do movimento modernista no Brasil. Jorge ?? o patrono da cadeira 37 da Academia Norte-Rio-Grandense de letras, cujo primeiro ocupante foi Newton Navarro. Escreveu as pe??as: Anticristo (1915), C??u Aberto (1915), J?? teve, O Brabo (Voudeville, 1918), A Mentira (Drama, 1916), Ave Maria (pe??a em 1 ato), Pelas Grades (Grand Guignol, 1915), De Joelhos (pe??a em 1 ato, 1938).');
JorgeOliveira.inserirID("JorgeOliveira");
JorgeOliveira.inserirNome("Jorge Oliveira");
textos.inserirArtista(JorgeOliveira);
var JoseFilho = new Artista_1.Artista();
JoseFilho.inserirTexto("Jos?? foi aluno da primeira turma da Escola Normal de Natal, formando-se em medicina. Atuou como fiscal. Sua ocupa????o com o teatro s?? come??ou quando assumiu a dire????o do Grupo Escolar de Canguaretama, o qual apresentava as pe??as que escrevia, dessas s?? se tem o conhecimento de ???Aliados do Pan???.");
JoseFilho.inserirID("JoseFilho");
JoseFilho.inserirNome("Jos?? Filho");
textos.inserirArtista(JoseFilho);
var JulitaCardoso = new Artista_1.Artista();
JulitaCardoso.inserirTexto("Julita C??mara Cardoso ou Didi C??mara (que era o pseud??nimo que costumava usar) foi uma poetisa, dramaturga e atriz que fundou e integrou grupos de teatro amadores durante a d??cada de 40. Antes de migrar para o sul, escreveu e encenou duas pe??as: O Divino Mestre (representada em 30 e 31 de mar??o de 1945) e Os Filhos do Mar (representada em 11 e 12 de abril de 1945), ambas no teatro Carlos Gomes (atual Teatro Alberto Maranh??o).");
JulitaCardoso.inserirID("JulitaCardoso");
JulitaCardoso.inserirNome("Julita Cardoso");
textos.inserirArtista(JulitaCardoso);
var JuniorDalberto = new Artista_1.Artista();
JuniorDalberto.inserirTexto("Dalberto era formado em Ci??ncias Cont??beis e foi policial federal, apesar da disparidade com a dramaturgia, escreveu 15 pe??as de teatro das quais, muitas s??o infantis, e o importante ???Boderline???, mon??logo que ficou seis anos em cartaz. Tamb??m fez dire????o c??nica da inaugura????o do Cine Teatro localizado em Parnamirim. Para al??m do teatro, tamb??m escreveu poesia e romances. ");
JuniorDalberto.inserirID("JuniorDalberto");
JuniorDalberto.inserirNome("Junior Dalberto");
textos.inserirArtista(JuniorDalberto);
var LenicioQueiroga = new Artista_1.Artista();
LenicioQueiroga.inserirTexto("Len??cio cursou Artes C??nicas no Rio de Janeiro. Durante a vida, se ocupou de diretor, dramaturgo, ator e cr??tico de teatro. Montou ???Apareceu Margarita??? que fora um sucesso na d??cada de 80 que lhe rendeu 12 pr??mios e escreveu ???Ch??o dos simples??? que tamb??m foi encenada pelo dramaturgo. Dentre seus trabalhos longe dos palcos, est??o o longa-metragem ???Boi de Prata??? de 1973 e duas novelas da Tv Globo. Antes de sua morte, trabalhava na administra????o do Teatro Alberto Maranh??o em Natal.");
LenicioQueiroga.inserirID("LenicioQueiroga");
LenicioQueiroga.inserirNome("Lenicio Queiroga");
textos.inserirArtista(LenicioQueiroga);
var leniltonteixeira = new Artista_1.Artista();
leniltonteixeira.inserirTexto("Lenilton Teixeira dos Santos ?? um professor, ator e diretor nascido em Lajes/RN em 1963. Lenilton iniciou sua trajet??ria com a arte durante a adolesc??ncia participando do movimento estudantil, mas sem pretens??o de ser artista. Foi durante seu ensino m??dio que uma professora de portugu??s o aconselhou a fazer teatro, e ele iniciou uma oficina oferecida pela prefeitura do Natal em 1982, ???Vamos fazer teatro nas escolas???.");
leniltonteixeira.inserirID("leniltonteixeira");
leniltonteixeira.inserirNome("Lenilton Teixeira");
leniltonteixeira.inserirBiografia("Durante o magist??rio sua professora de literatura infantil tamb??m sugeriu que fizesse vestibular para educa????o art??stica. Fez especializa????o e mestrado em teatro, trabalhou na rede municipal de ensino e atualmente est?? a frente do FUNCARTE- Natal. <br> Em julho de 1986 recebeu um convite de Ivonete Albano para integrar o ent??o rec??m formado grupo de teatro Estandarte, fundado em mar??o de 1986. Emitiu seu DRT de ator em 1993. Atuou tamb??m auxiliando outros grupos de teatro, embora nunca tenha integrado outro fora o grupo Estandarte, como o Grupo Carmin de Teatro atuando como assistente de dire????o, al??m de dirigir trabalhos pontuais, durante tr??s anos, no Acordes ??? grupo de canto.");
textos.inserirArtista(leniltonteixeira);
var LuisWanderley = new Artista_1.Artista();
LuisWanderley.inserirTexto("Wanderley formou-se m??dico na Bahia, ?? considerado o primeiro m??dico do estado. Ocupou cargos pol??ticos, foi professor, jornalista e dramaturgo. Dentre suas obras est??o: ???Louca ou o Riso da Dor???, ???Os anjos do amor??? (1884), ???O pr??mio da Vi??va??? e ???O Anjo da Meia-Noite???.");
LuisWanderley.inserirID("LuisWanderley");
LuisWanderley.inserirNome("Lu??s Wanderley");
textos.inserirArtista(LuisWanderley);
var ManoelItajuba = new Artista_1.Artista();
ManoelItajuba.inserirTexto("Manoel Ferreira foi balconista, pintor, dono de circo, jornalista em diversos jornais da ??poca e poeta. Suas obras possu??am influ??ncias do movimento Romantismo, dentre elas sua ??nica pe??a, ???Um Plano de Mulher???, com??dia que n??o agradou o p??blico quando encenada e obrigou o poeta a se retratar em jornal pelo aspecto pol??mico em cena.");
ManoelItajuba.inserirID("ManoelItajuba");
ManoelItajuba.inserirNome("Manoel Itajub??");
textos.inserirArtista(ManoelItajuba);
var ManuelSWanderley = new Artista_1.Artista();
ManuelSWanderley.inserirTexto("Manuel Segundo Wanderley nasceu no Rio Grande do Norte (doravante, RN), em 06 de abril de 1860, filho de Luiz Carlos Lins Wanderley e Francisca Carolina Lins Wanderley. Faleceu aos 48 anos em sua terra natal, no dia 14 de janeiro de 1909. Formado na Bahia, al??m da prestigiosa carreira como m??dico, foi teatr??logo, professor, orador, jornalista e poeta brasileiro.");
ManuelSWanderley.inserirID("ManuelSWanderley");
ManuelSWanderley.inserirNome("Manuel S. Wanderley");
ManuelSWanderley.inserirBiografia("Em sua ??poca, exerceu ativa participa????o na vida teatral natalense, exercendo diversas fun????es. Al??m disso, ele ?? considerado um dos maiores poetas do RN. Palmira Wanderley (1966, p.312) se referiu a ele como ???m??dico dos pobres e poeta do povo???, ele era tamb??m um apaixonado por teatro, Al??m de pe??as teatrais, produziu tamb??m livros, poemas e revistas que foram muito bem recebidas pelo p??blico no s??culo dezenove. <br><br> Conforme escreveu Othon (1998, p.41-43), o autor estava em conson??ncia com as ??ltimas inova????es do teatro Europeu, bem como em rela????o ao ide??rio pol??tico e acad??mico da ??poca, trazendo inova????es estil??sticas para o cen??rio natalense ??? escreveu a revista de costumes Natal em Camisa (1907), a primeira pe??a do g??nero em Natal (OTHON, 1998). Al??m disso, grande parte da fam??lia Wanderley est?? associada ?? pr??tica teatral, como ?? o caso do sobrinho do dramaturgo em quest??o, Sandoval Wanderley, considerado um dos maiores nomes de teatro no Rio Grande do Norte.");
textos.inserirArtista(ManuelSWanderley);
var MariaCaldas = new Artista_1.Artista();
MariaCaldas.inserirTexto("Maria Carolina Wanderley Caldas foi uma professora e escritora muito influente do munic??pio de Ass??. Nascida dia 4 de janeiro de 1891, chegou a ocupar a 11 cadeira da Academia Assuense de Letras. Teve como pais adotivos, Francisco Justiniano Lins Caldas e Umbelina Augusta Wanderley Caldas. Escreveu e os livros ???Musa Sertaneja???, ???Trovas Infantis???, ???Lira das Selvas??? e ???Palestras Infantis??? e ao que tudo indica diversos dramas escolares. Faleceu 20 de setembro de 1954.");
MariaCaldas.inserirID("MariaCaldas");
MariaCaldas.inserirNome("Maria Caldas");
textos.inserirArtista(MariaCaldas);
var MeiraPires = new Artista_1.Artista();
MeiraPires.inserirTexto("In??cio Meira Pires nasceu em Cear??-Mirim (15/03/1928 ??? 18/11/1982) foi um homem dedicado ao teatro durante toda sua vida, foi respons??vel pela dinamiza????o e expans??o das atividades art??sticas em Natal, principalmente o teatro. Dedicou-se 23 anos de sua vida para a dire????o da principal casa de espet??culos de Natal, o Teatro Alberto Maranh??o.");
MeiraPires.inserirID("MeiraPires");
MeiraPires.inserirNome("Meira Pires");
MeiraPires.inserirBiografia("Durante esse per??odo realizou v??rios eventos de suma import??ncia na ??rea, dentre eles: I Festival Nortista de teatro Amador (1995), o I Festival Nortista do Autor Teatral Brasileiro (1960) e o I Encontro dos Diretores de Teatro do Norte Nordeste (1962). Foi integrante do Conselho consultivo do Servi??o Nacional de Teatro e foi, posteriormente, diretor desse ??rg??o nacional, a partir de 1967. <br><br> Criou grupos amadores de teatro, ao todo seis, sendo eles: O Teatro de Cultura de Natal, a Phoenix Dram??tica Segundo Wanderley, o Tetaro de Bairro, o Teatro Escola de Natal, Meira Pires e seus Artistas e o Teatro Oper??rio de Natal. Escreveu dezesseis pe??as teatrais, dentre elas Bonit??o da Fam??lia, escrita em 1948 e que teve grande alcance, sendo interpretada por Proc??pio Ferreira, grande ator da ??poca. Mulher de Preto tamb??m de grande renome nacional, um monologo em dois atos, tendo car??ter revolucion??rio pois tratava-se de um personagem que era completamente apaixonado por uma prostituta, algo completamente fora dos moldes de 1952. <br><br> Meira pires foi o pioneiro em acrescentar a luz como elemento c??nico expressivo, acompanhando o sentimento de seu personagem do come??o at?? o ??pice de sua loucura. Vejamos abaixo algumas das obras publicadas e n??o publicadas de Meira Pires: A mulher de preto (mon??logo em dos atos); Um resto de trag??dia (trag??dia moderna em 3 atos); Teatro (contendo as pe??as Bonit??o da Fam??lia e Senhora de Carrapicho); Jo??o Farrapo (pe??a em tr??s atos); Cabe??a do mundo (pe??a em tr??s atos); Teatro que aprend?? (estudos); Teatro Alberto Maranh??o e seu Patrono (s??ntese hist??rica); O papel da Reserva Militar (confer??ncia); Caxias, O Pacificador (confer??ncia); TENAT (Um projeto cultural (discurso); Uma pol??tica de Teatro no desenvolvimento do Nordeste (estudo), dentre outras.");
textos.inserirArtista(MeiraPires);
var NatiCortez = new Artista_1.Artista();
NatiCortez.inserirTexto("Maria Natividade Cortez Gomes (Nati Cortez) nasceu na cidade de Natal (08/09/1914 ??? 1989), filha de Manoel Marcolino da Silva e Maria Gomes da Silva, casada com Manoel Gen??sio Cortez Gomes, tendo 24 filhos dos quais 17 foram criados. Foi poeta, trovadora, teatr??loga e ufologista e foi uma das respons??veis pela dinamiza????o do movimento cultural da cidade de Natal, na metade do s??culo XX. A escritora pertenceu a in??meros grupos intelectuais, entre eles foi membro da Sociedade dos Autores Teatrais; da Associa????o Norte-Rio-grandense de Astronomia e da Academia de Trovas do Rio Grande do Norte. Fez parte de antologias coletivas, como a de Escritores do Brasil e da Colet??nea dos poetas do Brasil. Nati publicou diversas obras, tais como: Di??logo das estrelas (1971); A abelhinha sonhadora (teatro infantil, 1973), Teatro espacial (teatro infantil), O curumim amaz??nico, Angola; Natal no espa??o sideral; A guerra dos planetas(1972) O mist??rio dos discos voadores (literatura de cordel, 1976) e O marimbondo amoroso.");
NatiCortez.inserirID("NatiCortez");
NatiCortez.inserirNome("Nati Cortez");
textos.inserirArtista(NatiCortez);
var NestorLima = new Artista_1.Artista();
NestorLima.inserirTexto("Formado em Direito, ocupou cargo de professor, diretor da universidade, secret??rio geral do estado. ?? o escritor do hino do Rio Grande do Norte e de diversas obras de sua ??rea de atua????o. Sua dramaturgia ?? concentrada na fantasia, dentre elas ???Augusto Severo???, ???Floral??? e ???Simbolismo na Nossa Bandeira???.");
NestorLima.inserirID("NestorLima");
NestorLima.inserirNome("Nestor Lima");
textos.inserirArtista(NestorLima);
var NewtonNavarro = new Artista_1.Artista();
NewtonNavarro.inserirTexto("Newton Navarro Bilro foi um dramaturgo, poeta, desenhista e pintor brasileiro, nascido em Natal (08/10/1928 ??? 18/03/1991). Filho de Elp??dio Soares Bilro e Celina Navarro Bilro. Em suas pinturas e obras retratava sobretudo os bairros Redinha e Ribeira/Santos Reis, o rio Potengi e os pescadores. Foi aluno dos Col??gios Santo Ant??nio e Atheneu Norte-rio-grandense, posteriormente da Faculdade de Direito do Recife, mas n??o concluiu o curso.");
NewtonNavarro.inserirID("NewtonNavarro");
NewtonNavarro.inserirNome("Newton Navarro");
NewtonNavarro.inserirBiografia("Frequentou curso livre de pintura naquela capital, onde conviveu com artistas como Lula Cardoso Ayres, H??lio Feij?? e Reinaldo Fonseca. Participou do I Sal??o de Arte Moderna do Recife, em 1948, no mesmo ano realizando sua primeira mostra em Natal. Em 1951 foi a Buenos Aires e em 1964, a Paris. Em 1966 tornaria ?? Europa, expondo em Lisboa. Al??m de artista pl??stico, foi poeta, contista, cronista e teatr??logo. <br><br> Colaborou no A Rep??blica, Di??rio de Natal e Tribuna do Norte e publicou os seguintes livros: Sub??rbio do Sil??ncio (poesias, 1953), Solit??rio Vento do Ver??o (contos, 1961), 30 Cr??nicas n??o-selecionadas (cr??nicas, 1563), Beira-Rio (cr??nicas, 1970), Os Mortos S??o Estrangeiros (contos, 1970), De Como se Perdeu o Gajeiro Curi?? (novela, 1974), Do Outro Lado do Rio, Entre os Morros (sem indica????o) e ABC do Cantador Clarimundo (poesias). <br><br> Produziu, ainda, ??lbuns de gravuras e pe??as teatrais. Pertencia ?? Academia Norte-rio-grandense de Letras. Foi o mentor e primeiro diretor da Escolinha de Artes C??ndido Portinari, da Funda????o Jos?? Augusto, hoje tendo o seu nome. Infelizmente a obra de Navarro n??o ?? extensa na ??rea do teatro, s??o de sua autoria: Um Jardim Chamado Gets??mani, O caminho da Cruz e Hoje Tem Poesia; e tamb??m as adapta????es para teatro de As M??os, de Sherwood Anderson, e O muro de Jean Paul Sartre. <br><br> Navarro tamb??m foi respons??vel por modernizar o cen??rio c??nico natalense, foi o primeiro a se utilizar de luz como recurso expressivo em cena. Al??m disso, ele foi respons??vel por nos colocar diante de um coro grego, elemento antigo no teatro, mas que foi adaptada com maestria pelo mesmo. Em sua homenagem, foi dada o nome dele, a maior e mais alta ponte estiada do Nordeste, a Ponte Newton Navarro, ligando justamente o bairro da Redinha ao bairro da Ribeira/Santos Reis.");
textos.inserirArtista(NewtonNavarro);
var PalmiraWanderley = new Artista_1.Artista();
PalmiraWanderley.inserirTexto("Palmira era poeta, em vida s?? conseguiu publicar uma de suas obras ???Roseira Brava???. Na dramaturgia escreveu a opereta ???Festa das Cores???, dividida em dois atos que fora apresentada no Teatro Carlos Gomes em 1924 e recebeu muitos elogios da imprensa regional.");
PalmiraWanderley.inserirID("PalmiraWanderley");
PalmiraWanderley.inserirNome("Palmira Wanderley");
textos.inserirArtista(PalmiraWanderley);
var PauloMelo = new Artista_1.Artista();
PauloMelo.inserirTexto("Paulo Her??ncio de Melo foi um foi um importante sacerdote e benfeitor, com principal atua????o na cidade de Currais Novos. Nascido em Natal no dia 3 de janeiro de 1901, era filho de Herm??genes Her??ncio de Melo e Maria das Merc??s Her??ncio de Melo. Tamb??m jornalista, historiador, prefeito da cidade de Macau, entre 1930 e 1931 e s??cio do Instituto Hist??rico e Geogr??fico do Rio Grande do Norte, no campo da dramaturgia foi respons??vel pela escrita das seguintes pe??as: S??o Sebasti??o (drama, em tr??s atos, 1936); Feminismo Triunfante (com??dia, em um ato, 1936); O Sono da Lagoa do Bom Fim (revista fantasia, em um ato). Faleceu em Currais Novos, dia 1 de setembro de 1963.");
PauloMelo.inserirID("PauloMelo");
PauloMelo.inserirNome("Paulo Melo");
textos.inserirArtista(PauloMelo);
var PoncianoBarbosa = new Artista_1.Artista();
PoncianoBarbosa.inserirTexto("Ponciano de Morais Barbosa, nascido em Natal (19/11/1889 ??? 12/01/1919), filho de Apolin??rio Joaquim Barbosa e Maria Em??lia de Morais Barbosa, foi um advogado formado pela Faculdade de Direito do Recife, ocupou posi????o destacada na vida social e liter??ria em Natal do come??o do s??culo passado.");
PoncianoBarbosa.inserirID("PoncianoBarbosa");
PoncianoBarbosa.inserirNome("Ponciano Barbosa");
PoncianoBarbosa.inserirBiografia("Foi deputado representando a classe oper??ria, secret??rio da Escola Normal de Natal, promotor p??blico, fundador da Sociedade de prote????o aos Animais e jornalista. Ao lado de intelectuais como Itajub??, Gotardo Neto, Jorge Fernandes, Ivo Filho, Angione Costa, Virg??lio Trindade e Jo??o Estev??o, integrou os gr??mios liter??rios da ??poca. Fez poesia e prosa, publicadas em jornais como O dia, O Potiguar, Di??rio de Not??cias e por fim, A Rep??blica, onde escrevia a se????o ???Clarescuros???. Para teatro deixou-nos a pe??a em 1 ato O Sonho (1915), Ave Maria (1915), em versos, M??scaras, r??pida passagem c??nica e a pe??a Perfei????o.");
textos.inserirArtista(PoncianoBarbosa);
var racinesantos = new Artista_1.Artista();
racinesantos.inserirTexto("Racine Santos ?? um dramaturgo, romancista, poeta e jornalista potiguar nascido em Natal no dia 6 de junho de 1948. Desde cedo recebeu o incentivo do pai para fazer teatro, viveu dos oito at?? os doze anos em Maca??ba onde acompanhava veementemente os circos que passavam pela cidade. Mas foi durante o semin??rio do col??gio Marista em Recife que encantou-se pelo teatro de palco, ap??s ver uma palestra do escritor e dramaturgo Ariano Suassuna.");
racinesantos.inserirID("racinesantos");
racinesantos.inserirNome("Racine Santos");
racinesantos.inserirBiografia("Racine a Natal em 1966, onde come??ou a trabalhar com teatro amador juntamente com Sandoval Wanderlei, trabalhando como ator nas pe??as dirigidas por Wanderlei e no ano seguinte entrou no grupo teatral do mesmo ???O teatro dos amadores de Natal???. Foi ap??s sua volta do Rio de Janeiro que Racine, segundo o pr??prio, escreveu sua primeira pe??a ???A Festa do Rei???, ap??s ficar encantado ao assistir uma representa????o de ???Ubu Rei???. Infelizmente no fim dos anos 60 ele sofreu um grave acidente, onde ficou um ano e dois meses internado se recuperando em um hospital no Rio Janeiro. O acidente, tragicamente, comprometeu sua voz, assim levando sua carreira como ator. Ap??s o tr??gico epis??dio ele se empenhou na escrita de pe??as, sendo, at?? ent??o, 18 pe??as publicadas, algumas delas interpretadas por todo o Brasil e na europa. Racine, em 1992, com Luis Marinho, Luis Maur??cio Carvalheira, Altimar Pimentel, T??cito Borralho, Romildo Moreira e outros, fundou a Associa????o dos Dramaturgos do Nordeste, da qual foi presidente. Atualmente o mesmo se dedica a escrita de romances, sendo o seu mais novo publicado o romance que se passa na cidade de sua inf??ncia, Maca??ba, ???De susto, de bala ou v??cio???.");
textos.inserirArtista(racinesantos);
var SandovalCWanderley = new Artista_1.Artista();
SandovalCWanderley.inserirTexto("Sandoval foi um dos indiv??duos que mais contribuiu com a arte potiguar. Atuou, dirigiu, escreveu ??? mais de 30 pe??as???, escreveu poesia foi jornalista. Em suas obras homenageou, fez drama, com??dia e possu??a car??ter espirituoso em muitas delas. Em 1962, seu nome se tornou tamb??m o de uma casa de espet??culos no bairro Alecrim, em reconhecimento de sua contribui????o. Dentre suas principais obras est??o ???Julgai-me Senhores???, ???A Lenda de Minueto??? e ???Quem Te Viu e Quem Te V?????.");
SandovalCWanderley.inserirID("SandovalCWanderley");
SandovalCWanderley.inserirNome("Sandoval C. Wanderley");
textos.inserirArtista(SandovalCWanderley);
var SantaGuerra = new Artista_1.Artista();
SantaGuerra.inserirTexto("Santa Caetana de Brito Guerra nasceu em Brejo do Apodi ??? Rio Grande do Norte (RN), atualmente denominado Felipe Guerra, em 07 de maio de 1903 e faleceu na cidade de Natal ??? RN, em 20 de agosto de 1988.");
SantaGuerra.inserirID("SantaGuerra");
SantaGuerra.inserirNome("Santa Guerra");
SantaGuerra.inserirBiografia("Formou-se na Escola Superior de Economia Dom??stica, vinculada a Universidade de Louvain, na B??lgica. Segundo afirma ??ngela Melo (1999), Santa Guerra, ???regressando ?? Cidade do Natal, exerceu o magist??rio da L??ngua Francesa, na Escola Dom??stica e, posteriormente, a Dire????o deste Estabelecimento de Ensino, de 1930 a 1935 (MELO, 1999, p.46)???. <br><br> Nesse per??odo, ela chefiou tamb??m a Ala Feminina da A????o Integralista. Foi patrona da Academia Mossoroense de Letras e escreveu diversos sketches. S??nia Othon se refere a ela como uma pessoa ???t??mida e de extraordin??ria simplicidade (OTHON, 1998, p.66)??? e que ???o di??logo era o seu meio de express??o mais direto (OTHON, 1998, p.66)???. <br><br> Ainda segundo a autora, a import??ncia de Santa Guerra para as artes teria sido dirigida ???para as ??reas did??tico-c??vica e religiosa, pois, sendo professora militante e cat??lica fervorosa, escreveu dramatiza????es para escolas e para a igreja (OTHON, 1998, p.66)???.");
textos.inserirArtista(SantaGuerra);
var SebastiaoOliveira = new Artista_1.Artista();
SebastiaoOliveira.inserirTexto("Sebasti??o era formado em direito e ocupou uma das cadeiras da Academia Norte-rio-grandense de Letras. Al??m de escritos relacionados a sua ??rea de forma????o escreveu duas pe??as ???Frei Miguelinho???, que contava com um protagonista narcisista e o drama ???Sara???.");
SebastiaoOliveira.inserirID("SebastiaoOliveira");
SebastiaoOliveira.inserirNome("Sebasti??o Oliveira");
textos.inserirArtista(SebastiaoOliveira);
var soniaothon = new Artista_1.Artista();
soniaothon.inserirTexto("S??nia Maria de Oliveira Othon nasceu em 1952, na cidade de Natal, no Rio Grande do Norte. Graduada em Hist??ria, foi professora adjunta do departamento de Artes da UFRN, onde lecionou Evolu????o do Teatro por um longo tempo. Durante sua carreira, n??o desenvolveu atividades ou pr??ticas teatrais profissionalmente.");
soniaothon.inserirID("soniaothon");
soniaothon.inserirNome("S??nia Othon");
soniaothon.inserirBiografia(" Ela fez cursos de p??s-gradua????o em M??sica e Teatro na UFMG, e Ensino de Arte na UFRN. Foi diretora do Teatro Alberto Maranh??o, em Natal, e foi vice-diretora do Centro de Ci??ncias Humanas, Letras e Artes da UFRN. Por sua pesquisa sobre a Hist??ria do Teatro em Natal, que resultou seu primeiro livro em 1998, Othon conquistou o Pr??mio Jesiel Figueiredo, em dezembro de 1995, promovido pela Funda????o Capitania das Artes, da prefeitura de Natal. Seu trabalho se baseia principalmente no car??ter hist??rico do teatro e seu papel fundamentador ao longo do desenvolvimento da cidade Natal. <br><br> Por isso, ela resgatou atores, atrizes, dramaturgos, pe??as teatrais, documentos e fatos hist??ricos que remontam das primeiras manifesta????es teatrais na referida cidade, at?? meados do s??culo dezenove. Dentre sua produ????o, destacamos seus dois livros in??ditos, ambos com foco na hist??ria do teatro em Natal: Dramaturgia da Cidade dos Reis Magos (1998) e Vida teatral e educativa da Cidade dos Reis Magos: Natal, 1727-1913 (2006).");
textos.inserirArtista(soniaothon);
var StelaBenevides = new Artista_1.Artista();
StelaBenevides.inserirTexto('Stela nasceu em Natal, onde passou toda sua vida. Ganhou notoriedade por ser filha do dramaturgo Manoel Segundo Wanderley. Escreveu desde nova, principalmente poemas e pe??as teatrais. "As Aventuras de um Pescador", ???O Testamento de Perp??tua???, "Romance na Primavera", "Nos Jardins do Pal??cio???, "Um Anjo em Apuros", "O Filho de Deus???, "N??o atires", "Dia das M??es" e ???Dia do Professor??? s??o pe??as infantis e com??dias escritas pela autora.');
StelaBenevides.inserirID("StelaBenevides");
StelaBenevides.inserirNome("Stela Benevides");
textos.inserirArtista(StelaBenevides);
var UrbanoBrandao = new Artista_1.Artista();
UrbanoBrandao.inserirTexto("Brand??o ocupou diversos postos em sua vida. De funcion??rio de banco a organizador de serenatas sua atividade com maior n??mero de registros fora a atua????o. Interpretou muitas pe??as registradas no Teatro Alberto Maranh??o. Como dramaturgo arriscou-se apenas uma vez com ???Beatriz??? uma alta com??dia que foi encenada na estreia do Gr??mio Dram??tico em 1939.");
UrbanoBrandao.inserirID("UrbanoBrandao");
UrbanoBrandao.inserirNome("Urbano Brand??o");
textos.inserirArtista(UrbanoBrandao);
var VirgilioTrindade = new Artista_1.Artista();
VirgilioTrindade.inserirTexto("Virg??lio Trindade era jornalista e membro da Academia de Norte-rio-grandense de Letras. No teatro, contribuiu com dois teatros de revista, g??nero marcado pela presen??a de m??sica e humor, eram elas ???Gymn??sio Por Dentro??? e ???P?? Duro??? que fora encenada em 1936 em Teatro Carlos Gomes. Ainda no teatro chegou a contribuir com Jorge Fernandes na revista ???On Plus??? finalizada em 1920.");
VirgilioTrindade.inserirID("VirgilioTrindade");
VirgilioTrindade.inserirNome("Virgilio Trindade");
textos.inserirArtista(VirgilioTrindade);
exports["default"] = textos;

},{"./Artista":2}]},{},[1]);
