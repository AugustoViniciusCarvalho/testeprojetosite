import { Obra } from "./Obra";

export class ListaObras{
    obras: Array<Obra> = [];

    adicionarObra(obra: Obra){
        this.obras.push(obra);
    }

    acharObra(autor: string){
        let obras = [];
        for (let i = 0; i < this.obras.length; i++){
            if (autor == this.obras[i].getAutor()){
                obras.push(this.obras[i]);
            }
        }
        return obras;
    }
}

let listaobras = new ListaObras();

let formacaorural = new Obra();
formacaorural.setAutor("SantaGuerra");
formacaorural.setTitulo("formacaorural");
formacaorural.setTituloPublico("Formação Rural");
listaobras.adicionarObra(formacaorural);

let omenordosmeusirmaos = new Obra();
omenordosmeusirmaos.setAutor("SantaGuerra");
omenordosmeusirmaos.setTitulo("omenordosmeusirmaos");
omenordosmeusirmaos.setTituloPublico("O Menor dos Meus Irmãos");
listaobras.adicionarObra(omenordosmeusirmaos);  

let aabelinhasonhadora = new Obra();
aabelinhasonhadora.setAutor("NatiCortez");
aabelinhasonhadora.setTitulo("aabelinhasonhadora");
aabelinhasonhadora.setTituloPublico("A Abelinha Sonhadora");
listaobras.adicionarObra(aabelinhasonhadora);

let aguerradosplanetas = new Obra();
aguerradosplanetas.setAutor("NatiCortez");
aguerradosplanetas.setTitulo("aguerradosplanetas");
aguerradosplanetas.setTituloPublico("A Guerra dos Planetas");
listaobras.adicionarObra(aguerradosplanetas);

let ivoneteI = new Obra();
ivoneteI.setAutor("ivonetealbano");
ivoneteI.setTitulo("ivoneteI");
ivoneteI.setTituloPublico("Recortes I");
listaobras.adicionarObra(ivoneteI);

let ivoneteII = new Obra();
ivoneteII.setAutor("ivonetealbano");
ivoneteII.setTitulo("ivoneteII");
ivoneteII.setTituloPublico("Recortes II");
listaobras.adicionarObra(ivoneteII);

let ivoneteIII = new Obra();
ivoneteIII.setAutor("ivonetealbano");
ivoneteIII.setTitulo("ivoneteIII");
ivoneteIII.setTituloPublico("Recortes III");
listaobras.adicionarObra(ivoneteIII);

let ivoneteIV = new Obra();
ivoneteIV.setAutor("ivonetealbano");
ivoneteIV.setTitulo("ivoneteIV");
ivoneteIV.setTituloPublico("Recortes IV");
listaobras.adicionarObra(ivoneteIV);

let aprovidencia = new Obra();
aprovidencia.setAutor("ManuelSWanderley");
aprovidencia.setTitulo("aprovidencia");
aprovidencia.setTituloPublico("A Providência");
listaobras.adicionarObra(aprovidencia);

let astresdatas = new Obra();
astresdatas.setAutor("ManuelSWanderley");
astresdatas.setTitulo("astresdatas");
astresdatas.setTituloPublico("As Três Datas");
listaobras.adicionarObra(astresdatas);

let oanjodameianoite = new Obra();
oanjodameianoite.setAutor("ManuelSWanderley");
oanjodameianoite.setTitulo("oanjodameianoite");
oanjodameianoite.setTituloPublico("O Anjo da Meia Noite");
listaobras.adicionarObra(oanjodameianoite);

let brasileiroseportugueses = new Obra();
brasileiroseportugueses.setAutor("ManuelSWanderley");
brasileiroseportugueses.setTitulo("brasileiroseportugueses");
brasileiroseportugueses.setTituloPublico("Brasileiros e Portugueses");
listaobras.adicionarObra(brasileiroseportugueses);

let osanjosdoclaustro = new Obra();
osanjosdoclaustro.setAutor("ManuelSWanderley");
osanjosdoclaustro.setTitulo("ivoneteIV");
osanjosdoclaustro.setTituloPublico("Os Anjos do Claustro");
listaobras.adicionarObra(osanjosdoclaustro);

let avemaria = new Obra();
avemaria.setAutor("PoncianoBarbosa");
avemaria.setTitulo("avemaria");
avemaria.setTituloPublico("Ave-Maria");
listaobras.adicionarObra(avemaria);

let cabecadomundo = new Obra();
cabecadomundo.setAutor("MeiraPires");
cabecadomundo.setTitulo("cabecadomundo");
cabecadomundo.setTituloPublico("Cabeça do Mundo");
listaobras.adicionarObra(cabecadomundo);

let umrestodehomem = new Obra();
umrestodehomem.setAutor("MeiraPires");
umrestodehomem.setTitulo("umrestodehomem");
umrestodehomem.setTituloPublico("Um Resto de Homem");
listaobras.adicionarObra(umrestodehomem);

let dialogodasestrelas = new Obra();
dialogodasestrelas.setAutor("NatiCortez");
dialogodasestrelas.setTitulo("dialogodasestrelas");
dialogodasestrelas.setTituloPublico("Diálogo das Estrelas");
listaobras.adicionarObra(dialogodasestrelas);

let onatalnoespacosideral = new Obra();
onatalnoespacosideral.setAutor("NatiCortez");
onatalnoespacosideral.setTitulo("onatalnoespacosideral");
onatalnoespacosideral.setTituloPublico("O Natal no Espaço Sideral");
listaobras.adicionarObra(onatalnoespacosideral);

let pelasgrades = new Obra();
pelasgrades.setAutor("JorgeFernandes");
pelasgrades.setTitulo("pelasgrades");
pelasgrades.setTituloPublico("Pelas Grades");
listaobras.adicionarObra(pelasgrades);

let umjardimchamadogetsemani = new Obra();
umjardimchamadogetsemani.setAutor("NewtonNavarro");
umjardimchamadogetsemani.setTitulo("umjardimchamadogetsemani");
umjardimchamadogetsemani.setTituloPublico("Um Jardim Chamado Getsêmani");
listaobras.adicionarObra(umjardimchamadogetsemani);

let EntrevistaOthon = new Obra();
EntrevistaOthon.setAutor("soniaothon");
EntrevistaOthon.setTitulo("EntrevistaOthon");
EntrevistaOthon.setTituloPublico("Entrevista na Integra");
listaobras.adicionarObra(EntrevistaOthon);

let EntrevistaRacine = new Obra();
EntrevistaRacine.setAutor("racinesantos");
EntrevistaRacine.setTitulo("EntrevistaRacine");
EntrevistaRacine.setTituloPublico("Entrevista na Integra");
listaobras.adicionarObra(EntrevistaRacine);

let EntrevistaIvonete = new Obra();
EntrevistaIvonete.setAutor("ivonetealbano");
EntrevistaIvonete.setTitulo("EntrevistaIvonete");
EntrevistaIvonete.setTituloPublico("Entrevista na Integra");
listaobras.adicionarObra(EntrevistaIvonete);

export default listaobras;