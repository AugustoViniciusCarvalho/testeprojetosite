import { Artista } from "./Artista";

export class TextosArtistas{
    artistas: Array<Artista> = [];

    inserirArtista(artista: Artista){
        this.artistas.push(artista);
    }

    acharArtista(id: string): Artista{
        for (let i = 0; i < this.artistas.length; i++){
            if (id == this.artistas[i].id){
                return this.artistas[i];
            }
        }
    }
}

let textos = new TextosArtistas();

let grimariofarias = new Artista();
grimariofarias.inserirTexto("Grimário Farias da Costa é um ator e dramaturgo potiguar, nascido em Coronel Ezequiel (na época município de Santa Cruz/RN), viveu no município até os 4 anos de idade e posteriormente se mudou para o Paraná, vivendo em duas cidades, Guairaça e Amaporã. ");
grimariofarias.inserirID("grimariofarias");
grimariofarias.inserirNome("Grimário Farias");
grimariofarias.inserirBiografia("Aos 18 anos voltou para Natal para estudar direito na Universidade Federal do Rio Grande do Norte. Durante suas férias promovia eventos culturais em sua cidade natal e a partir daí o interesse pelo teatro nasce. Foi após assistir o espetáculo “Augusto dos Anjos: Poeta e cidadão Brasileiro” que o influenciou totalmente a tomar o rumo do teatro, assistiu a peça mais de dez vezes e decorou tudo. Encontrou-se com um conhecido em Santa Cruz e o mesmo sugeriu que ele fizesse teatro. Ao voltar para Natal, esse mesmo conhecido o convidou para participar do espetáculo “A Ampulheta e o Espelho” em 1973. Durante as apresentações dessa peça recebeu o convite para integrar a companhia teatral “Novo Universitário”, e durante pela ditadura militar, em 1974, estreou o espetáculo “A Pena e a Lei”. Participou, também, ativamente de projetos como “Natal em Natal”, do grupo “Carpintaria Teatral” e de 1985 até 2017 do grupo “Alegria Alegria”. Também se especializou pela UFRN em ensino de teatro. Atualmente é diretor do teatro, infelizmente fechado, Sandoval Wanderlei, localizado no bairro Alecrim. Considera sua maior especialidade o teatro de rua.");
textos.inserirArtista(grimariofarias);

let ivonetealbano = new Artista();
ivonetealbano.inserirTexto("Ivonete Albano Bezerra nasceu em Jucurutu, no Seridó do Rio Grande do Norte, em 10 de maio de 1956. Atriz, desde criança já se interessava pelo lado artístico, cantando dramas e montando pequenos trechos, que apresentava em piqueniques e eventos enquanto participava do movimento Bandeirante, na época, para meninas. Em 1970, na adolescência, recebeu a primeira proposta para participar de um espetáculo no teatro Severino Cabral, em Campina Grande, cidade na qual passou a residir.");
ivonetealbano.inserirID("ivonetealbano");
ivonetealbano.inserirNome("Ivonete Albano");
ivonetealbano.inserirBiografia("Em 1975, migra para Natal, no intuito de fazer uma faculdade pública. Em 1977, ingressou no curso de Educação Artística da UFRN. No mesmo ano, participou do grupo Teatro Novo Universitário (TONUS), na época dirigido por Carlos Furtado. Começou a frequentar o grupo como contrarregra e depois ficou oficializada como atriz, no elenco da TV Universitária – uma ótima oportunidade na época, pois os artistas tinham suas carteiras assinadas o que, além de oferecer um salário, também significava o reconhecimento da profissão. <br> <br> Quando deixou o grupo TONUS, participou do Grupo Teimosia, que tinha um viés social em função dos movimentos estudantis que afloraram na reta final da ditadura, em 1980. Em 1982, iniciou na Federação de Teatro Amador do Rio Grande do Norte, que assumiu durante dois anos e pela qual realizou o Primeiro Festival de Teatro Amador de Natal. <br> <br> Participou clandestinamente do Partido Comunista Brasileiro (PCB), a parir das reuniões e para explorar o viés político do teatro, Ivonete Albano criou o Grupo Estandarte de Teatro, formado com algumas pessoas que compartilhavam a causa. O primeiro espetáculo do grupo se chamou A Greve, estreado na Cidade Nova, em Natal. Ademais, ela foi diretora do Teatro Alberto Maranhão (TAM).");
textos.inserirArtista(ivonetealbano);

let AntonioSouza = new Artista();
AntonioSouza.inserirTexto("Nascido em uma região que hoje corresponde a Nísia Floresta, Antônio atuou como promotor público e assumiu o governo do estado oito vezes.  Escrevia utilizando o pseudônimo de Polycarpo Feitosa. Sua obra conta com diversos romances, contos e poemas. Para o teatro só escrevera somente uma comédia intitulada “Qual o mais forte?” encenada em 1928 no Teatro Carlos Gomes.");
AntonioSouza.inserirID("AntonioSouza");
AntonioSouza.inserirNome("Antônio Souza");
textos.inserirArtista(AntonioSouza);

let CarolinaWanderley = new Artista();
CarolinaWanderley.inserirTexto("Nascida em Assú foi professora, poeta e dramaturga. Lecionou durante boa parte de sua vida e após aposentada fundou a revista “Via Láctea”. Publicou livros de poesia e peças, dentre estas: “Ao Espelho”, “Escudo do Rio Grande do Norte”, “O Prisioneiro”, “O Chapéu de Plumas”, “Neste Dia” e “Ardores em Festa”, grande parte delas são revistas infantis. Devido sua contribuição à literatura potiguar pertenceu a Academia Norte-rio-grandense de Letras.");
CarolinaWanderley.inserirID("CarolinaWanderley");
CarolinaWanderley.inserirNome("Carolina Wanderley");
textos.inserirArtista(CarolinaWanderley);

let ChicutaFernandes = new Artista();
ChicutaFernandes.inserirTexto("Francisca Nolasco Fernandes ou simplesmente Chicuta Nolasco foi uma professora, escritora e jornalista, nascida em 15 de dezembro de 1908 em Jardim de Piranhas e falecida em 10 de junho de 1995. Foi casada com o Dr.Túlio Fernandes de Oliveira e teve quatro filhos: Hilma Fernandes de Matos Serejo, Túlio Fernandes de Oliveira Filho, Sebastião Fernandes de Oliveira Neto e Caio Flávio Fernandes de Oliveira. Foi autora da obra “A Menina Feia e Amarelinha”, publicada em Natal, em 1973 e no ramo da dramaturgia, foi responsável pela escrita de duas revistas: As Três Graças (em um ato, 1935); Nosso Brasil (em dois atos) encenadas, posteriormente no Teatro Carlos Gomes (atual Teatro Alberto Maranhão) respectivamente em novembro de 1935 e em novembro de 1942).");
ChicutaFernandes.inserirID("ChicutaFernandes");
ChicutaFernandes.inserirNome("Chicuta Fernandes");
textos.inserirArtista(ChicutaFernandes);

let ClaricePalma = new Artista();
ClaricePalma.inserirTexto("Clarice foi poeta e atriz, começou sua atuação no Conjunto Teatral Potiguar, do qual se tem registro de dois trabalhos da atriz: “Quando o Amor Renasce” e “A Cega”, ambas representadas no Teatro Carlos Fomes na década de 1940. Posteriormente, ela mesma criou seu grupo teatral chamado Clube dos Sete.");
ClaricePalma.inserirID("ClaricePalma");
ClaricePalma.inserirNome("Clarice Palma");
textos.inserirArtista(ClaricePalma);

let ClementinoJunior = new Artista();
ClementinoJunior.inserirTexto("Clementino Câmara Júnior, nascido em Natal no dia 31 de março de 1920, é o autor de uma única alta comedia “O Destino de Cada Um” (3 atos), que foi representada no Teatro Carlos Gomes (atual Teatro Alberto Maranhão), em dezembro de 1944 pelo Grêmio Dramático de Natal. Mudou-se em 1945 para o Rio de Janeiro para exercer Jornalismo.");
ClementinoJunior.inserirID("ClementinoJunior");
ClementinoJunior.inserirNome("Clementino Junior");
textos.inserirArtista(ClementinoJunior);

let CostaFilho = new Artista();
CostaFilho.inserirTexto('Costa teve seu primeiro contato com o teatro aos 11 anos em uma peça escolar. Na vida adulta atuou como diretor, cenógrafo e ator. O artista já contribui com montagens de peças de Racine Santos. Como ator, se destaca na sua participação em “Negrinha” da década de 80 e "Enveredamos pelas lendas indígenas e compomos Tucuí". ');
CostaFilho.inserirID("CostaFilho");
CostaFilho.inserirNome("Costa Filho");
textos.inserirArtista(CostaFilho);

let DeolindoLima = new Artista();
DeolindoLima.inserirTexto('Nascido na cidade de Açu, era líder da Maçonaria do estado. Escreveu para diversos jornais, escreveu dois cadernos de poesia e seresteiro. Para o teatro, contribuiu somente com a revista “Reino das Fitas” de 1916.');
DeolindoLima.inserirID("DeolindoLima");
DeolindoLima.inserirNome("Deolindo Lima");
textos.inserirArtista(DeolindoLima);

let EiderMeneses = new Artista();
EiderMeneses.inserirTexto('Eider Furtado de Mendonça e Meneses foi um jornalista e advogado potiguar, nascido em 23 de março de 1924 e falecido em 6 de novembro de 2019. Escreveu e encenou em dezembro de 1942 a peça em 2 atos “Feira de Casamentos”.');
EiderMeneses.inserirID("EiderMeneses");
EiderMeneses.inserirNome("Eider Meneses");
textos.inserirArtista(EiderMeneses);

let EzequielWanderley = new Artista();
EzequielWanderley.inserirTexto("Eider Furtado de Mendonça e Meneses foi um jornalista e advogado potiguar, nascido em 23 de março de 1924 e falecido em 6 de novembro de 2019. Escreveu e encenou em dezembro de 1942 a peça em 2 atos “Feira de Casamentos”.");
EzequielWanderley.inserirID("EzequielWanderley");
EzequielWanderley.inserirNome("Ezequiel Wanderley");
textos.inserirArtista(EzequielWanderley);

let FilgueiraFilho = new Artista();
FilgueiraFilho.inserirTexto("Filgueira Filho foi um médico, jornalista e comediógrafo nascido em outubro de 1912 em Mossoró e falecido em Belo Horizonte/MG, em novembro de 1947. <br> <br> É autor das peças: Que loucura, Leonor! (vaudeville, encenado no Teatro Carlos Gomes em dezembro de 1932 pelo grupo amador Conjunto Alma do Norte); O Galante Baltazar (comédia em 2 atos encenada em 1933); Zezé (em parceria com Elpídio Câmara, encenada pela Companhia Brasileira de Comédia em 1936); Amor é sempre amor (comédia encenada em julho de 1940); A Mulher de Porcelana e Mucambo (em parceria com o autor e diretor pernambucano Waldemar de Oliveira, com  mais de 20 apresentações no Teatro Santa Isabel em Recife/PE).");
FilgueiraFilho.inserirID("FilgueiraFilho");
FilgueiraFilho.inserirNome("Filgueira Filho");
textos.inserirArtista(FilgueiraFilho);

let FranciscoCavalcanti = new Artista();
FranciscoCavalcanti.inserirTexto("Ivo foi jornalista, poeta, contista, professor, advogado e dramaturgo. Nascido em Natal no ano de 1886, sua produção teatral era focada em questões sociais e psicológicas como a complexidade do ser e a luta de classes. Dentre suas principais obras estão: “Sônia”, “Além”, “O Flagelo (musical)” e “Renúncia”. ");
FranciscoCavalcanti.inserirID("FranciscoCavalcanti");
FranciscoCavalcanti.inserirNome("Francisco Cavalcanti");
textos.inserirArtista(FranciscoCavalcanti);

let GeraldoOliveira = new Artista();
GeraldoOliveira.inserirTexto("Geraldo Fernandes de Oliveira foi um desembargador nascido dia 19 de novembro de 1915 em Ceará-Mirim, filho de Sebastião Fernandes de Oliveira, foi responsável por uma única alta comédia: E a Felicidade? (encenada no Teatro Carlos Gomes (atual Teatro Alberto Maranhão) em março de 1936 pelo Departamento de Teatro do Centro Estadual Potyguar).");
GeraldoOliveira.inserirID("GeraldoOliveira");
GeraldoOliveira.inserirNome("Geraldo Oliveira");
textos.inserirArtista(GeraldoOliveira);

let HenriqueSousa = new Artista();
HenriqueSousa.inserirTexto("Henrique era poeta, jornalista e vice-governador do Rio Grande do Norte duas vezes. É considerado um grande nome na literatura potiguar especialmente por seus poemas, estes que escrevia desde jovem. No teatro contribuiu escrevendo “Suprema Dor”, “O Enjeitado” (inspirado em “Édipo-Rei”) e “A promessa”, sendo essa a única que se tem registro de apresentação. Suas peças e romances são em maior parte dramas.");
HenriqueSousa.inserirID("HenriqueSousa");
HenriqueSousa.inserirNome("Henrique Sousa");
textos.inserirArtista(HenriqueSousa);

let IsabelGondim = new Artista();
IsabelGondim.inserirTexto("Registrada por Sônia Othon como a primeira mulher a redigir peças de teatro em Natal, com a obra “O Sacrifício do Amor” (1909). Gondim foi educadora e é considerada uma das primeiras mulheres intelectuais do estado.");
IsabelGondim.inserirID("IsabelGondim");
IsabelGondim.inserirNome("Isabel Gondim");
textos.inserirArtista(IsabelGondim);

let JaymeWanderley = new Artista();
JaymeWanderley.inserirTexto("Jayme dos Guimarães Wanderley foi um poeta, dramaturgo, romancista, ensaísta, biógrafo, memorialista, cronista, jornalista e rádio novelista (inclusive, o primeiro que escreveu radionovelas em Natal) que participou da fundação da Academia Potiguar de Letras e da Academia de Trovas, e ocupou a cadeira 23 da Academia Norte-rio-grandense de Letras.");
JaymeWanderley.inserirID("JaymeWanderley");
JaymeWanderley.inserirNome("Jayme Wanderley");
JaymeWanderley.inserirBiografia("Nascido em Natal dia 6 de julho de 1897, filho de Celestino Carlos Wanderley e Ana Guimarães Wanderley, integrou também grupos de teatro amador, o Instituto Histórico e Geográfico do Rio Grande do Norte; foi Presidente do Clube de Poesia. Sua primeira peça “O Homem que Perdeu a Alma” foi encenada no Teatro Carlos Gomes (atual Alberto Teatro Maranhão) e no Teatro Santa Rosa (João Pessoa/PB) em 1952, tendo Meira Pires no papel principal. Escreveu também “Reencontro de Deuses” e “Alguém Chorou a Perdida”. Pela primeira vez no teatro Natalense, em 1967, um drama trata sobre a revolução de 1964, sendo esse “Dinorá”. Jayme Wanderley faleceu em 24 de fevereiro de 1986.");
textos.inserirArtista(JaymeWanderley);

let JoaoLeite = new Artista();
JoaoLeite.inserirTexto("João é natural de Currais Novos, executou praticamente todas as funções que se pode fazer no teatro (diretor, maquiador, cenógrafo, figurinista, dramaturgo, ator, entre outros). É mestrado em letras e tem uma longa lista de peças em que trabalhou. Dentre suas obras é destaque “A Encruzilhada Hamlet” de 2009. Hoje, atua como docente na UFPE em mais de cinco disciplinas.");
JoaoLeite.inserirID("JoaoLeite");
JoaoLeite.inserirNome("João Leite");
textos.inserirArtista(JoaoLeite);

let JoaquimFagundes = new Artista();
JoaquimFagundes.inserirTexto("Fagundes era uma figura polêmica por suas árduas críticas ao governo e a igreja. Era poeta, jornalista e dramaturgo. “Vieira de Castro”, “A mão de Deus”, “A Queda de um Anjo” e “A Queda de Susbel” são suas obras que carregavam também o criticismo dele sobre a sociedade da cidade Natal.");
JoaquimFagundes.inserirID("JoaquimFagundes");
JoaquimFagundes.inserirNome("Joaquim Fagundes");
textos.inserirArtista(JoaquimFagundes);

let JoaquimMaranhao = new Artista();
JoaquimMaranhao.inserirTexto("Irmão de Alberto Maranhão, governador da época, Joaquim inclui em sua produção as obras “Canela de Ferro”, “Diabo e Carne” e “Jerimum...Não há!...”, todas comédias que também foram encenadas e musicadas pelo autor. Scipião também fora o primeiro diretor do Teatro Alberto Maranhão e lecionava aulas de música no local.");
JoaquimMaranhao.inserirID("JoaquimMaranhao");
JoaquimMaranhao.inserirNome("Joaquim Maranhão");
textos.inserirArtista(JoaquimMaranhao);

let JorgeFernandes = new Artista();
JorgeFernandes.inserirTexto('Jorge Fernandes de Oliveira nasceu na cidade de Natal, no Rio Grande do Norte, em 22 de agosto 1887 e faleceu no mesmo local, em 17 de julho de 1953. Filho do professor Manuel Fernandes de Oliveira e de Francisca Fagundes de Oliveira.');
JorgeFernandes.inserirID("JorgeFernandes");
JorgeFernandes.inserirNome("Jorge Fernandes");
JorgeFernandes.inserirBiografia('Foi um importante dramaturgo, produziu peças, livros, poemas e revistas. Conforme Sônia Othon (1889, p.54), ele é considerado “o pai da poesia moderna no Rio Grande do Norte”, considerado inovador em suas produções. Dentre elas, destacamos a peça denominada Pelas Grandes (1915), no estilo Grand Guignol, seguindo uma tendência francesa do final do século dezenove. Algumas de suas obras foram encenadas pelo grupo “Sociedade Dramática Henrique Castriciano”, em abril de 1915, e pela “Sociedade Grêmio Dramático”. Conforme afirma Ângela Melo (1999, p.42), as produções do autor no campo da dramaturgia foram muitas, “nos mais variados estilos, da comédia ao drama, das revistas à peças patrióticas”. Ainda segundo afirma a autora (1999, p.42), “Jorge Fernandes colaborou em diversos jornais e revistas e publicou em 1909, o livro de estréia [sic] "Contos & Troças-Loucuras", em colaboração com Ivo Filho. Em 1927, publicou o "Livro de Poemas", em versos modernos”.');
textos.inserirArtista(JorgeFernandes);

let JorgeOliveira = new Artista();
JorgeOliveira.inserirTexto('Jorge Fernandes de Oliveira foi um dramaturgo, poeta, contista e cronista potiguar. Nascido em Natal dia 22 de agosto de 1887 e falecido dia 17 de julho de 1953, era filho do professor Manoel Fernandes de Oliveira e de Francisca Fagundes Fernandes. Autor do livro “Livro de Poemas de Jorge Fernandes” (1927), foi um dos principais responsáveis pela precursão do movimento modernista no Brasil. Jorge é o patrono da cadeira 37 da Academia Norte-Rio-Grandense de letras, cujo primeiro ocupante foi Newton Navarro. Escreveu as peças: Anticristo (1915), Céu Aberto (1915), Já teve, O Brabo (Voudeville, 1918), A Mentira (Drama, 1916), Ave Maria (peça em 1 ato), Pelas Grades (Grand Guignol, 1915), De Joelhos (peça em 1 ato, 1938).');
JorgeOliveira.inserirID("JorgeOliveira");
JorgeOliveira.inserirNome("Jorge Oliveira");
textos.inserirArtista(JorgeOliveira);

let JoseFilho = new Artista();
JoseFilho.inserirTexto("José foi aluno da primeira turma da Escola Normal de Natal, formando-se em medicina. Atuou como fiscal. Sua ocupação com o teatro só começou quando assumiu a direção do Grupo Escolar de Canguaretama, o qual apresentava as peças que escrevia, dessas só se tem o conhecimento de “Aliados do Pan”.");
JoseFilho.inserirID("JoseFilho");
JoseFilho.inserirNome("José Filho");
textos.inserirArtista(JoseFilho);

let JulitaCardoso = new Artista();
JulitaCardoso.inserirTexto("Julita Câmara Cardoso ou Didi Câmara (que era o pseudônimo que costumava usar) foi uma poetisa, dramaturga e atriz que fundou e integrou grupos de teatro amadores durante a década de 40. Antes de migrar para o sul, escreveu e encenou duas peças: O Divino Mestre (representada em 30 e 31 de março de 1945) e Os Filhos do Mar (representada em 11 e 12 de abril de 1945), ambas no teatro Carlos Gomes (atual Teatro Alberto Maranhão).");
JulitaCardoso.inserirID("JulitaCardoso");
JulitaCardoso.inserirNome("Julita Cardoso");
textos.inserirArtista(JulitaCardoso);

let JuniorDalberto = new Artista();
JuniorDalberto.inserirTexto("Dalberto era formado em Ciências Contábeis e foi policial federal, apesar da disparidade com a dramaturgia, escreveu 15 peças de teatro das quais, muitas são infantis, e o importante “Boderline”, monólogo que ficou seis anos em cartaz. Também fez direção cênica da inauguração do Cine Teatro localizado em Parnamirim. Para além do teatro, também escreveu poesia e romances. ");
JuniorDalberto.inserirID("JuniorDalberto");
JuniorDalberto.inserirNome("Junior Dalberto");
textos.inserirArtista(JuniorDalberto);

let LenicioQueiroga = new Artista();
LenicioQueiroga.inserirTexto("Lenício cursou Artes Cênicas no Rio de Janeiro. Durante a vida, se ocupou de diretor, dramaturgo, ator e crítico de teatro. Montou “Apareceu Margarita” que fora um sucesso na década de 80 que lhe rendeu 12 prêmios e escreveu “Chão dos simples” que também foi encenada pelo dramaturgo. Dentre seus trabalhos longe dos palcos, estão o longa-metragem “Boi de Prata” de 1973 e duas novelas da Tv Globo. Antes de sua morte, trabalhava na administração do Teatro Alberto Maranhão em Natal.");
LenicioQueiroga.inserirID("LenicioQueiroga");
LenicioQueiroga.inserirNome("Lenicio Queiroga");
textos.inserirArtista(LenicioQueiroga);

let leniltonteixeira = new Artista();
leniltonteixeira.inserirTexto("Lenilton Teixeira dos Santos é um professor, ator e diretor nascido em Lajes/RN em 1963. Lenilton iniciou sua trajetória com a arte durante a adolescência participando do movimento estudantil, mas sem pretensão de ser artista. Foi durante seu ensino médio que uma professora de português o aconselhou a fazer teatro, e ele iniciou uma oficina oferecida pela prefeitura do Natal em 1982, “Vamos fazer teatro nas escolas”.");
leniltonteixeira.inserirID("leniltonteixeira");
leniltonteixeira.inserirNome("Lenilton Teixeira");
leniltonteixeira.inserirBiografia("Durante o magistério sua professora de literatura infantil também sugeriu que fizesse vestibular para educação artística. Fez especialização e mestrado em teatro, trabalhou na rede municipal de ensino e atualmente está a frente do FUNCARTE- Natal. <br> Em julho de 1986 recebeu um convite de Ivonete Albano para integrar o então recém formado grupo de teatro Estandarte, fundado em março de 1986. Emitiu seu DRT de ator em 1993. Atuou também auxiliando outros grupos de teatro, embora nunca tenha integrado outro fora o grupo Estandarte, como o Grupo Carmin de Teatro atuando como assistente de direção, além de dirigir trabalhos pontuais, durante três anos, no Acordes – grupo de canto.");
textos.inserirArtista(leniltonteixeira);

let LuisWanderley = new Artista();
LuisWanderley.inserirTexto("Wanderley formou-se médico na Bahia, é considerado o primeiro médico do estado. Ocupou cargos políticos, foi professor, jornalista e dramaturgo. Dentre suas obras estão: “Louca ou o Riso da Dor”, “Os anjos do amor” (1884), “O prêmio da Viúva” e “O Anjo da Meia-Noite”.");
LuisWanderley.inserirID("LuisWanderley");
LuisWanderley.inserirNome("Luís Wanderley");
textos.inserirArtista(LuisWanderley);

let ManoelItajuba = new Artista();
ManoelItajuba.inserirTexto("Manoel Ferreira foi balconista, pintor, dono de circo, jornalista em diversos jornais da época e poeta. Suas obras possuíam influências do movimento Romantismo, dentre elas sua única peça, “Um Plano de Mulher”, comédia que não agradou o público quando encenada e obrigou o poeta a se retratar em jornal pelo aspecto polêmico em cena.");
ManoelItajuba.inserirID("ManoelItajuba");
ManoelItajuba.inserirNome("Manoel Itajubá");
textos.inserirArtista(ManoelItajuba);

let ManuelSWanderley = new Artista();
ManuelSWanderley.inserirTexto("Manuel Segundo Wanderley nasceu no Rio Grande do Norte (doravante, RN), em 06 de abril de 1860, filho de Luiz Carlos Lins Wanderley e Francisca Carolina Lins Wanderley. Faleceu aos 48 anos em sua terra natal, no dia 14 de janeiro de 1909. Formado na Bahia, além da prestigiosa carreira como médico, foi teatrólogo, professor, orador, jornalista e poeta brasileiro.");
ManuelSWanderley.inserirID("ManuelSWanderley");
ManuelSWanderley.inserirNome("Manuel S. Wanderley");
ManuelSWanderley.inserirBiografia("Em sua época, exerceu ativa participação na vida teatral natalense, exercendo diversas funções. Além disso, ele é considerado um dos maiores poetas do RN. Palmira Wanderley (1966, p.312) se referiu a ele como “médico dos pobres e poeta do povo”, ele era também um apaixonado por teatro, Além de peças teatrais, produziu também livros, poemas e revistas que foram muito bem recebidas pelo público no século dezenove. <br><br> Conforme escreveu Othon (1998, p.41-43), o autor estava em consonância com as últimas inovações do teatro Europeu, bem como em relação ao ideário político e acadêmico da época, trazendo inovações estilísticas para o cenário natalense – escreveu a revista de costumes Natal em Camisa (1907), a primeira peça do gênero em Natal (OTHON, 1998). Além disso, grande parte da família Wanderley está associada à prática teatral, como é o caso do sobrinho do dramaturgo em questão, Sandoval Wanderley, considerado um dos maiores nomes de teatro no Rio Grande do Norte.");
textos.inserirArtista(ManuelSWanderley);

let MariaCaldas = new Artista();
MariaCaldas.inserirTexto("Maria Carolina Wanderley Caldas foi uma professora e escritora muito influente do município de Assú. Nascida dia 4 de janeiro de 1891, chegou a ocupar a 11 cadeira da Academia Assuense de Letras. Teve como pais adotivos, Francisco Justiniano Lins Caldas e Umbelina Augusta Wanderley Caldas. Escreveu e os livros “Musa Sertaneja”, “Trovas Infantis”, “Lira das Selvas” e “Palestras Infantis” e ao que tudo indica diversos dramas escolares. Faleceu 20 de setembro de 1954.");
MariaCaldas.inserirID("MariaCaldas");
MariaCaldas.inserirNome("Maria Caldas");
textos.inserirArtista(MariaCaldas);

let MeiraPires = new Artista();
MeiraPires.inserirTexto("Inácio Meira Pires nasceu em Ceará-Mirim (15/03/1928 – 18/11/1982) foi um homem dedicado ao teatro durante toda sua vida, foi responsável pela dinamização e expansão das atividades artísticas em Natal, principalmente o teatro. Dedicou-se 23 anos de sua vida para a direção da principal casa de espetáculos de Natal, o Teatro Alberto Maranhão.");
MeiraPires.inserirID("MeiraPires");
MeiraPires.inserirNome("Meira Pires");
MeiraPires.inserirBiografia("Durante esse período realizou vários eventos de suma importância na área, dentre eles: I Festival Nortista de teatro Amador (1995), o I Festival Nortista do Autor Teatral Brasileiro (1960) e o I Encontro dos Diretores de Teatro do Norte Nordeste (1962). Foi integrante do Conselho consultivo do Serviço Nacional de Teatro e foi, posteriormente, diretor desse órgão nacional, a partir de 1967. <br><br> Criou grupos amadores de teatro, ao todo seis, sendo eles: O Teatro de Cultura de Natal, a Phoenix Dramática Segundo Wanderley, o Tetaro de Bairro, o Teatro Escola de Natal, Meira Pires e seus Artistas e o Teatro Operário de Natal. Escreveu dezesseis peças teatrais, dentre elas Bonitão da Família, escrita em 1948 e que teve grande alcance, sendo interpretada por Procópio Ferreira, grande ator da época. Mulher de Preto também de grande renome nacional, um monologo em dois atos, tendo caráter revolucionário pois tratava-se de um personagem que era completamente apaixonado por uma prostituta, algo completamente fora dos moldes de 1952. <br><br> Meira pires foi o pioneiro em acrescentar a luz como elemento cênico expressivo, acompanhando o sentimento de seu personagem do começo até o ápice de sua loucura. Vejamos abaixo algumas das obras publicadas e não publicadas de Meira Pires: A mulher de preto (monólogo em dos atos); Um resto de tragédia (tragédia moderna em 3 atos); Teatro (contendo as peças Bonitão da Família e Senhora de Carrapicho); João Farrapo (peça em três atos); Cabeça do mundo (peça em três atos); Teatro que aprendí (estudos); Teatro Alberto Maranhão e seu Patrono (síntese histórica); O papel da Reserva Militar (conferência); Caxias, O Pacificador (conferência); TENAT (Um projeto cultural (discurso); Uma política de Teatro no desenvolvimento do Nordeste (estudo), dentre outras.");
textos.inserirArtista(MeiraPires);

let NatiCortez = new Artista();
NatiCortez.inserirTexto("Maria Natividade Cortez Gomes (Nati Cortez) nasceu na cidade de Natal (08/09/1914 – 1989), filha de Manoel Marcolino da Silva e Maria Gomes da Silva, casada com Manoel Genésio Cortez Gomes, tendo 24 filhos dos quais 17 foram criados. Foi poeta, trovadora, teatróloga e ufologista e foi uma das responsáveis pela dinamização do movimento cultural da cidade de Natal, na metade do século XX. A escritora pertenceu a inúmeros grupos intelectuais, entre eles foi membro da Sociedade dos Autores Teatrais; da Associação Norte-Rio-grandense de Astronomia e da Academia de Trovas do Rio Grande do Norte. Fez parte de antologias coletivas, como a de Escritores do Brasil e da Coletànea dos poetas do Brasil. Nati publicou diversas obras, tais como: Diálogo das estrelas (1971); A abelhinha sonhadora (teatro infantil, 1973), Teatro espacial (teatro infantil), O curumim amazònico, Angola; Natal no espaço sideral; A guerra dos planetas(1972) O mistério dos discos voadores (literatura de cordel, 1976) e O marimbondo amoroso.");
NatiCortez.inserirID("NatiCortez");
NatiCortez.inserirNome("Nati Cortez");
textos.inserirArtista(NatiCortez);

let NestorLima = new Artista();
NestorLima.inserirTexto("Formado em Direito, ocupou cargo de professor, diretor da universidade, secretário geral do estado. É o escritor do hino do Rio Grande do Norte e de diversas obras de sua área de atuação. Sua dramaturgia é concentrada na fantasia, dentre elas “Augusto Severo”, “Floral” e “Simbolismo na Nossa Bandeira”.");
NestorLima.inserirID("NestorLima");
NestorLima.inserirNome("Nestor Lima");
textos.inserirArtista(NestorLima);

let NewtonNavarro = new Artista();
NewtonNavarro.inserirTexto("Newton Navarro Bilro foi um dramaturgo, poeta, desenhista e pintor brasileiro, nascido em Natal (08/10/1928 – 18/03/1991). Filho de Elpídio Soares Bilro e Celina Navarro Bilro. Em suas pinturas e obras retratava sobretudo os bairros Redinha e Ribeira/Santos Reis, o rio Potengi e os pescadores. Foi aluno dos Colégios Santo Antônio e Atheneu Norte-rio-grandense, posteriormente da Faculdade de Direito do Recife, mas não concluiu o curso.");
NewtonNavarro.inserirID("NewtonNavarro");
NewtonNavarro.inserirNome("Newton Navarro");
NewtonNavarro.inserirBiografia("Frequentou curso livre de pintura naquela capital, onde conviveu com artistas como Lula Cardoso Ayres, Hélio Feijó e Reinaldo Fonseca. Participou do I Salão de Arte Moderna do Recife, em 1948, no mesmo ano realizando sua primeira mostra em Natal. Em 1951 foi a Buenos Aires e em 1964, a Paris. Em 1966 tornaria à Europa, expondo em Lisboa. Além de artista plástico, foi poeta, contista, cronista e teatrólogo. <br><br> Colaborou no A República, Diário de Natal e Tribuna do Norte e publicou os seguintes livros: Subúrbio do Silêncio (poesias, 1953), Solitário Vento do Verão (contos, 1961), 30 Crônicas não-selecionadas (crônicas, 1563), Beira-Rio (crônicas, 1970), Os Mortos São Estrangeiros (contos, 1970), De Como se Perdeu o Gajeiro Curió (novela, 1974), Do Outro Lado do Rio, Entre os Morros (sem indicação) e ABC do Cantador Clarimundo (poesias). <br><br> Produziu, ainda, álbuns de gravuras e peças teatrais. Pertencia à Academia Norte-rio-grandense de Letras. Foi o mentor e primeiro diretor da Escolinha de Artes Cândido Portinari, da Fundação José Augusto, hoje tendo o seu nome. Infelizmente a obra de Navarro não é extensa na área do teatro, são de sua autoria: Um Jardim Chamado Getsêmani, O caminho da Cruz e Hoje Tem Poesia; e também as adaptações para teatro de As Mãos, de Sherwood Anderson, e O muro de Jean Paul Sartre. <br><br> Navarro também foi responsável por modernizar o cenário cênico natalense, foi o primeiro a se utilizar de luz como recurso expressivo em cena. Além disso, ele foi responsável por nos colocar diante de um coro grego, elemento antigo no teatro, mas que foi adaptada com maestria pelo mesmo. Em sua homenagem, foi dada o nome dele, a maior e mais alta ponte estiada do Nordeste, a Ponte Newton Navarro, ligando justamente o bairro da Redinha ao bairro da Ribeira/Santos Reis.");
textos.inserirArtista(NewtonNavarro);

let PalmiraWanderley = new Artista();
PalmiraWanderley.inserirTexto("Palmira era poeta, em vida só conseguiu publicar uma de suas obras “Roseira Brava”. Na dramaturgia escreveu a opereta “Festa das Cores”, dividida em dois atos que fora apresentada no Teatro Carlos Gomes em 1924 e recebeu muitos elogios da imprensa regional.");
PalmiraWanderley.inserirID("PalmiraWanderley");
PalmiraWanderley.inserirNome("Palmira Wanderley");
textos.inserirArtista(PalmiraWanderley);

let PauloMelo = new Artista();
PauloMelo.inserirTexto("Paulo Herôncio de Melo foi um foi um importante sacerdote e benfeitor, com principal atuação na cidade de Currais Novos. Nascido em Natal no dia 3 de janeiro de 1901, era filho de Hermógenes Herôncio de Melo e Maria das Mercês Herôncio de Melo. Também jornalista, historiador, prefeito da cidade de Macau, entre 1930 e 1931 e sócio do Instituto Histórico e Geográfico do Rio Grande do Norte, no campo da dramaturgia foi responsável pela escrita das seguintes peças: São Sebastião (drama, em três atos, 1936); Feminismo Triunfante (comédia, em um ato, 1936); O Sono da Lagoa do Bom Fim (revista fantasia, em um ato). Faleceu em Currais Novos, dia 1 de setembro de 1963.");
PauloMelo.inserirID("PauloMelo");
PauloMelo.inserirNome("Paulo Melo");
textos.inserirArtista(PauloMelo);

let PoncianoBarbosa = new Artista();
PoncianoBarbosa.inserirTexto("Ponciano de Morais Barbosa, nascido em Natal (19/11/1889 – 12/01/1919), filho de Apolinário Joaquim Barbosa e Maria Emília de Morais Barbosa, foi um advogado formado pela Faculdade de Direito do Recife, ocupou posição destacada na vida social e literária em Natal do começo do século passado.");
PoncianoBarbosa.inserirID("PoncianoBarbosa");
PoncianoBarbosa.inserirNome("Ponciano Barbosa");
PoncianoBarbosa.inserirBiografia("Foi deputado representando a classe operária, secretário da Escola Normal de Natal, promotor público, fundador da Sociedade de proteção aos Animais e jornalista. Ao lado de intelectuais como Itajubá, Gotardo Neto, Jorge Fernandes, Ivo Filho, Angione Costa, Virgílio Trindade e João Estevão, integrou os grêmios literários da época. Fez poesia e prosa, publicadas em jornais como O dia, O Potiguar, Diário de Notícias e por fim, A República, onde escrevia a seção “Clarescuros”. Para teatro deixou-nos a peça em 1 ato O Sonho (1915), Ave Maria (1915), em versos, Máscaras, rápida passagem cênica e a peça Perfeição.");
textos.inserirArtista(PoncianoBarbosa);

let racinesantos = new Artista();
racinesantos.inserirTexto("Racine Santos é um dramaturgo, romancista, poeta e jornalista potiguar nascido em Natal no dia 6 de junho de 1948. Desde cedo recebeu o incentivo do pai para fazer teatro, viveu dos oito até os doze anos em Macaíba onde acompanhava veementemente os circos que passavam pela cidade. Mas foi durante o seminário do colégio Marista em Recife que encantou-se pelo teatro de palco, após ver uma palestra do escritor e dramaturgo Ariano Suassuna.");
racinesantos.inserirID("racinesantos");
racinesantos.inserirNome("Racine Santos");
racinesantos.inserirBiografia("Racine a Natal em 1966, onde começou a trabalhar com teatro amador juntamente com Sandoval Wanderlei, trabalhando como ator nas peças dirigidas por Wanderlei e no ano seguinte entrou no grupo teatral do mesmo “O teatro dos amadores de Natal”. Foi após sua volta do Rio de Janeiro que Racine, segundo o próprio, escreveu sua primeira peça “A Festa do Rei”, após ficar encantado ao assistir uma representação de “Ubu Rei”. Infelizmente no fim dos anos 60 ele sofreu um grave acidente, onde ficou um ano e dois meses internado se recuperando em um hospital no Rio Janeiro. O acidente, tragicamente, comprometeu sua voz, assim levando sua carreira como ator. Após o trágico episódio ele se empenhou na escrita de peças, sendo, até então, 18 peças publicadas, algumas delas interpretadas por todo o Brasil e na europa. Racine, em 1992, com Luis Marinho, Luis Maurício Carvalheira, Altimar Pimentel, Tácito Borralho, Romildo Moreira e outros, fundou a Associação dos Dramaturgos do Nordeste, da qual foi presidente. Atualmente o mesmo se dedica a escrita de romances, sendo o seu mais novo publicado o romance que se passa na cidade de sua infância, Macaíba, “De susto, de bala ou vício”.");
textos.inserirArtista(racinesantos);

let SandovalCWanderley = new Artista();
SandovalCWanderley.inserirTexto("Sandoval foi um dos indivíduos que mais contribuiu com a arte potiguar. Atuou, dirigiu, escreveu – mais de 30 peças–, escreveu poesia foi jornalista. Em suas obras homenageou, fez drama, comédia e possuía caráter espirituoso em muitas delas. Em 1962, seu nome se tornou também o de uma casa de espetáculos no bairro Alecrim, em reconhecimento de sua contribuição. Dentre suas principais obras estão “Julgai-me Senhores”, “A Lenda de Minueto” e “Quem Te Viu e Quem Te Vê”.");
SandovalCWanderley.inserirID("SandovalCWanderley");
SandovalCWanderley.inserirNome("Sandoval C. Wanderley");
textos.inserirArtista(SandovalCWanderley);

let SantaGuerra = new Artista();
SantaGuerra.inserirTexto("Santa Caetana de Brito Guerra nasceu em Brejo do Apodi – Rio Grande do Norte (RN), atualmente denominado Felipe Guerra, em 07 de maio de 1903 e faleceu na cidade de Natal – RN, em 20 de agosto de 1988.");
SantaGuerra.inserirID("SantaGuerra");
SantaGuerra.inserirNome("Santa Guerra");
SantaGuerra.inserirBiografia("Formou-se na Escola Superior de Economia Doméstica, vinculada a Universidade de Louvain, na Bélgica. Segundo afirma Ângela Melo (1999), Santa Guerra, “regressando à Cidade do Natal, exerceu o magistério da Língua Francesa, na Escola Doméstica e, posteriormente, a Direção deste Estabelecimento de Ensino, de 1930 a 1935 (MELO, 1999, p.46)”. <br><br> Nesse período, ela chefiou também a Ala Feminina da Ação Integralista. Foi patrona da Academia Mossoroense de Letras e escreveu diversos sketches. Sônia Othon se refere a ela como uma pessoa “tímida e de extraordinária simplicidade (OTHON, 1998, p.66)” e que “o diálogo era o seu meio de expressão mais direto (OTHON, 1998, p.66)”. <br><br> Ainda segundo a autora, a importância de Santa Guerra para as artes teria sido dirigida “para as áreas didático-cívica e religiosa, pois, sendo professora militante e católica fervorosa, escreveu dramatizações para escolas e para a igreja (OTHON, 1998, p.66)”.");
textos.inserirArtista(SantaGuerra);

let SebastiaoOliveira = new Artista();
SebastiaoOliveira.inserirTexto("Sebastião era formado em direito e ocupou uma das cadeiras da Academia Norte-rio-grandense de Letras. Além de escritos relacionados a sua área de formação escreveu duas peças “Frei Miguelinho”, que contava com um protagonista narcisista e o drama “Sara”.");
SebastiaoOliveira.inserirID("SebastiaoOliveira");
SebastiaoOliveira.inserirNome("Sebastião Oliveira");
textos.inserirArtista(SebastiaoOliveira);

let soniaothon = new Artista();
soniaothon.inserirTexto("Sônia Maria de Oliveira Othon nasceu em 1952, na cidade de Natal, no Rio Grande do Norte. Graduada em História, foi professora adjunta do departamento de Artes da UFRN, onde lecionou Evolução do Teatro por um longo tempo. Durante sua carreira, não desenvolveu atividades ou práticas teatrais profissionalmente.");
soniaothon.inserirID("soniaothon");
soniaothon.inserirNome("Sônia Othon");
soniaothon.inserirBiografia(" Ela fez cursos de pós-graduação em Música e Teatro na UFMG, e Ensino de Arte na UFRN. Foi diretora do Teatro Alberto Maranhão, em Natal, e foi vice-diretora do Centro de Ciências Humanas, Letras e Artes da UFRN. Por sua pesquisa sobre a História do Teatro em Natal, que resultou seu primeiro livro em 1998, Othon conquistou o Prêmio Jesiel Figueiredo, em dezembro de 1995, promovido pela Fundação Capitania das Artes, da prefeitura de Natal. Seu trabalho se baseia principalmente no caráter histórico do teatro e seu papel fundamentador ao longo do desenvolvimento da cidade Natal. <br><br> Por isso, ela resgatou atores, atrizes, dramaturgos, peças teatrais, documentos e fatos históricos que remontam das primeiras manifestações teatrais na referida cidade, até meados do século dezenove. Dentre sua produção, destacamos seus dois livros inéditos, ambos com foco na história do teatro em Natal: Dramaturgia da Cidade dos Reis Magos (1998) e Vida teatral e educativa da Cidade dos Reis Magos: Natal, 1727-1913 (2006).");
textos.inserirArtista(soniaothon);

let StelaBenevides = new Artista();
StelaBenevides.inserirTexto('Stela nasceu em Natal, onde passou toda sua vida. Ganhou notoriedade por ser filha do dramaturgo Manoel Segundo Wanderley. Escreveu desde nova, principalmente poemas e peças teatrais. "As Aventuras de um Pescador", “O Testamento de Perpétua”, "Romance na Primavera", "Nos Jardins do Palácio”, "Um Anjo em Apuros", "O Filho de Deus”, "Não atires", "Dia das Mães" e “Dia do Professor” são peças infantis e comédias escritas pela autora.');
StelaBenevides.inserirID("StelaBenevides");
StelaBenevides.inserirNome("Stela Benevides");
textos.inserirArtista(StelaBenevides);

let UrbanoBrandao = new Artista();
UrbanoBrandao.inserirTexto("Brandão ocupou diversos postos em sua vida. De funcionário de banco a organizador de serenatas sua atividade com maior número de registros fora a atuação. Interpretou muitas peças registradas no Teatro Alberto Maranhão. Como dramaturgo arriscou-se apenas uma vez com “Beatriz” uma alta comédia que foi encenada na estreia do Grêmio Dramático em 1939.");
UrbanoBrandao.inserirID("UrbanoBrandao");
UrbanoBrandao.inserirNome("Urbano Brandão");
textos.inserirArtista(UrbanoBrandao);

let VirgilioTrindade = new Artista();
VirgilioTrindade.inserirTexto("Virgílio Trindade era jornalista e membro da Academia de Norte-rio-grandense de Letras. No teatro, contribuiu com dois teatros de revista, gênero marcado pela presença de música e humor, eram elas “Gymnásio Por Dentro” e “Pé Duro” que fora encenada em 1936 em Teatro Carlos Gomes. Ainda no teatro chegou a contribuir com Jorge Fernandes na revista “On Plus” finalizada em 1920.");
VirgilioTrindade.inserirID("VirgilioTrindade");
VirgilioTrindade.inserirNome("Virgilio Trindade");
textos.inserirArtista(VirgilioTrindade);

export default textos;