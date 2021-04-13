(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var ListaObras_1 = require("./ListaObras");
var e = localStorage.getItem("e");
var obra = ListaObras_1["default"].acharObra(e);
for (var i = 0; i < obra.length; i++) {
    var div = document.createElement("div");
    div.id = "documentositens";
    var p = document.createElement("p");
    p.innerHTML = obra[i].getTituloPublico();
    var img = document.createElement("img");
    img.className = "imagemcinza";
    img.src = "Obras Imagens/" + obra[i].getTitulo() + ".png";
    document.getElementById("documentos").appendChild(div);
    var a = document.createElement("a");
    if (obra[i].getTitulo() == "aabelinhasonhadora") {
        a.href = "https://drive.google.com/file/d/1iGlIZP4fEweX3DLlM9Rp7u8h0nHh4XXa/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "aguerradosplanetas") {
        a.href = "https://drive.google.com/file/d/1R081_ZQujUP6SNUWifsGnt85sepyNonS/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "aloucadamontanha") {
        a.href = "https://drive.google.com/file/d/1M-4kmZ-nKXEMRki_dFEdjXI2Q5icSa97/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "amanhaquemsabe") {
        a.href = "https://drive.google.com/file/d/18JVDRSydfUDfo_p15KtGVqTG4xfkcMOM/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "aprovidencia") {
        a.href = "https://drive.google.com/file/d/1BIHwmeDFKDHBXgFpEvl4WS56QVrsdIio/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "astresdatas") {
        a.href = "https://drive.google.com/file/d/1bgjm29MMP1ZzQC3dDe_YdqK54q8KTZ1J/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "aloucadamontanha") {
        a.href = "https://drive.google.com/file/d/1M-4kmZ-nKXEMRki_dFEdjXI2Q5icSa97/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "avemaria") {
        a.href = "https://drive.google.com/file/d/1716gOeZ-J2VwdHvr54XEgakh9gQTDR8F/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "brasileiroseportugueses") {
        a.href = "https://drive.google.com/file/d/1EaJuRIvA6Aljewxg2qtr5yfUq1MIkVnw/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "cabecadomundo") {
        a.href = "https://drive.google.com/file/d/1BKQDRYrBloyATmL8rN8uOcygC1ODnKMv/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "caodefila") {
        a.href = "https://drive.google.com/file/d/1wUSy9zFEXc4Xx7f5IUKVy83MAD3Lsnz2/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "compraseummarido") {
        a.href = "https://drive.google.com/file/d/1Ls57tIxR0ge7b_SGvQL-YslQPr-QFwXD/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "dialogodasestrelas") {
        a.href = "https://drive.google.com/file/d/13Tg_vzP-vvB1oMYomCKK2uDPhsTgzgVk/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "formacaorural") {
        a.href = "https://drive.google.com/file/d/1yuLmRpdvBmfFJHxFhpdQ4V9SEXKQIyka/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "oanjodameianoite") {
        a.href = "https://drive.google.com/file/d/1eg7ro-dqRO6o0EBLIHqYbZEPB1yf1jCk/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "ocarrasco") {
        a.href = "https://drive.google.com/file/d/1Oq_M4ZCuaRl-hRMT_vftbA57hpW-yBfL/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "omenordosmeusirmaos") {
        a.href = "https://drive.google.com/file/d/1RBgSt2l6yZCdXp8GFN9DEfCMQykgQuZp/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "onatalnoespacosideral") {
        a.href = "https://drive.google.com/file/d/1WoPzg1bM0N57R2SUhhTRa6fN3PKi5Pgw/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "osanjosdoclaustro") {
        a.href = "https://drive.google.com/file/d/1PLQb7_UpIUNIGZ1hNitIANb0563YbdoM/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "pelasgrades") {
        a.href = "https://drive.google.com/open?id=18d7KxjLRgAyBeYBuptDbGnuSLJpzsL4s";
    }
    else if (obra[i].getTitulo() == "pertinhodoceu") {
        a.href = "https://drive.google.com/open?id=1OadEmV7pT8VJrSZ2U16s6PC9EdTKrNnh";
    }
    else if (obra[i].getTitulo() == "seusoldonalua") {
        a.href = "https://drive.google.com/file/d/1kW584CwU0XJvmaJMGwMejk6PanPDjnVp/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "umjardimchamadogetsemani") {
        a.href = "https://drive.google.com/file/d/1q0eMAjkWWn3lB5pMWU8sfS33psEnPrzn/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "umrestodehomem") {
        a.href = "https://drive.google.com/file/d/1bZqj1FKfDmTMewMav1S9_3jG3y2r34gI/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "ivoneteI") {
        a.href = "https://drive.google.com/file/d/1sAleH3jYYKUeSORJ8eA_CAx3g3sxAZXq/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "ivoneteII") {
        a.href = "https://drive.google.com/file/d/1-Sul0ejS--3d3yoklp7OgXvcpn_xlFnl/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "ivoneteIII") {
        a.href = "https://drive.google.com/file/d/1JBH0tbL5bJE1nTaiMDFiXQKNe9ApNMfK/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "ivoneteIV") {
        a.href = "https://drive.google.com/file/d/1kc3DIphDjjkVMxj1Ef0NGonuKoTrr4vf/view?usp=sharing";
    }
    else if (obra[i].getTitulo() == "EntrevistaOthon") {
        a.href = "https://youtu.be/kv_zWv74mhc";
    }
    else if (obra[i].getTitulo() == "EntrevistaRacine") {
        a.href = "https://youtu.be/dco3g3T1a2g";
    }
    else if (obra[i].getTitulo() == "EntrevistaIvonete") {
        a.href = "https://youtu.be/Xkt59hgBy28";
    }
    a.appendChild(img);
    div.appendChild(p);
    div.appendChild(a);
}
if (document.getElementById("documentos").childElementCount == 0) {
    document.getElementById("documentos").remove();
    document.getElementById("titulodoc").remove();
}

},{"./ListaObras":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.ListaObras = void 0;
var Obra_1 = require("./Obra");
var ListaObras = /** @class */ (function () {
    function ListaObras() {
        this.obras = [];
    }
    ListaObras.prototype.adicionarObra = function (obra) {
        this.obras.push(obra);
    };
    ListaObras.prototype.acharObra = function (autor) {
        var obras = [];
        for (var i = 0; i < this.obras.length; i++) {
            if (autor == this.obras[i].getAutor()) {
                obras.push(this.obras[i]);
            }
        }
        return obras;
    };
    return ListaObras;
}());
exports.ListaObras = ListaObras;
var listaobras = new ListaObras();
var formacaorural = new Obra_1.Obra();
formacaorural.setAutor("SantaGuerra");
formacaorural.setTitulo("formacaorural");
formacaorural.setTituloPublico("Formação Rural");
listaobras.adicionarObra(formacaorural);
var omenordosmeusirmaos = new Obra_1.Obra();
omenordosmeusirmaos.setAutor("SantaGuerra");
omenordosmeusirmaos.setTitulo("omenordosmeusirmaos");
omenordosmeusirmaos.setTituloPublico("O Menor dos Meus Irmãos");
listaobras.adicionarObra(omenordosmeusirmaos);
var aabelinhasonhadora = new Obra_1.Obra();
aabelinhasonhadora.setAutor("NatiCortez");
aabelinhasonhadora.setTitulo("aabelinhasonhadora");
aabelinhasonhadora.setTituloPublico("A Abelinha Sonhadora");
listaobras.adicionarObra(aabelinhasonhadora);
var aguerradosplanetas = new Obra_1.Obra();
aguerradosplanetas.setAutor("NatiCortez");
aguerradosplanetas.setTitulo("aguerradosplanetas");
aguerradosplanetas.setTituloPublico("A Guerra dos Planetas");
listaobras.adicionarObra(aguerradosplanetas);
var ivoneteI = new Obra_1.Obra();
ivoneteI.setAutor("ivonetealbano");
ivoneteI.setTitulo("ivoneteI");
ivoneteI.setTituloPublico("Recortes I");
listaobras.adicionarObra(ivoneteI);
var ivoneteII = new Obra_1.Obra();
ivoneteII.setAutor("ivonetealbano");
ivoneteII.setTitulo("ivoneteII");
ivoneteII.setTituloPublico("Recortes II");
listaobras.adicionarObra(ivoneteII);
var ivoneteIII = new Obra_1.Obra();
ivoneteIII.setAutor("ivonetealbano");
ivoneteIII.setTitulo("ivoneteIII");
ivoneteIII.setTituloPublico("Recortes III");
listaobras.adicionarObra(ivoneteIII);
var ivoneteIV = new Obra_1.Obra();
ivoneteIV.setAutor("ivonetealbano");
ivoneteIV.setTitulo("ivoneteIV");
ivoneteIV.setTituloPublico("Recortes IV");
listaobras.adicionarObra(ivoneteIV);
var aprovidencia = new Obra_1.Obra();
aprovidencia.setAutor("ManuelSWanderley");
aprovidencia.setTitulo("aprovidencia");
aprovidencia.setTituloPublico("A Providência");
listaobras.adicionarObra(aprovidencia);
var astresdatas = new Obra_1.Obra();
astresdatas.setAutor("ManuelSWanderley");
astresdatas.setTitulo("astresdatas");
astresdatas.setTituloPublico("As Três Datas");
listaobras.adicionarObra(astresdatas);
var oanjodameianoite = new Obra_1.Obra();
oanjodameianoite.setAutor("ManuelSWanderley");
oanjodameianoite.setTitulo("oanjodameianoite");
oanjodameianoite.setTituloPublico("O Anjo da Meia Noite");
listaobras.adicionarObra(oanjodameianoite);
var brasileiroseportugueses = new Obra_1.Obra();
brasileiroseportugueses.setAutor("ManuelSWanderley");
brasileiroseportugueses.setTitulo("brasileiroseportugueses");
brasileiroseportugueses.setTituloPublico("Brasileiros e Portugueses");
listaobras.adicionarObra(brasileiroseportugueses);
var osanjosdoclaustro = new Obra_1.Obra();
osanjosdoclaustro.setAutor("ManuelSWanderley");
osanjosdoclaustro.setTitulo("ivoneteIV");
osanjosdoclaustro.setTituloPublico("Os Anjos do Claustro");
listaobras.adicionarObra(osanjosdoclaustro);
var avemaria = new Obra_1.Obra();
avemaria.setAutor("PoncianoBarbosa");
avemaria.setTitulo("avemaria");
avemaria.setTituloPublico("Ave-Maria");
listaobras.adicionarObra(avemaria);
var cabecadomundo = new Obra_1.Obra();
cabecadomundo.setAutor("MeiraPires");
cabecadomundo.setTitulo("cabecadomundo");
cabecadomundo.setTituloPublico("Cabeça do Mundo");
listaobras.adicionarObra(cabecadomundo);
var umrestodehomem = new Obra_1.Obra();
umrestodehomem.setAutor("MeiraPires");
umrestodehomem.setTitulo("umrestodehomem");
umrestodehomem.setTituloPublico("Um Resto de Homem");
listaobras.adicionarObra(umrestodehomem);
var dialogodasestrelas = new Obra_1.Obra();
dialogodasestrelas.setAutor("NatiCortez");
dialogodasestrelas.setTitulo("dialogodasestrelas");
dialogodasestrelas.setTituloPublico("Diálogo das Estrelas");
listaobras.adicionarObra(dialogodasestrelas);
var onatalnoespacosideral = new Obra_1.Obra();
onatalnoespacosideral.setAutor("NatiCortez");
onatalnoespacosideral.setTitulo("onatalnoespacosideral");
onatalnoespacosideral.setTituloPublico("O Natal no Espaço Sideral");
listaobras.adicionarObra(onatalnoespacosideral);
var pelasgrades = new Obra_1.Obra();
pelasgrades.setAutor("JorgeFernandes");
pelasgrades.setTitulo("pelasgrades");
pelasgrades.setTituloPublico("Pelas Grades");
listaobras.adicionarObra(pelasgrades);
var umjardimchamadogetsemani = new Obra_1.Obra();
umjardimchamadogetsemani.setAutor("NewtonNavarro");
umjardimchamadogetsemani.setTitulo("umjardimchamadogetsemani");
umjardimchamadogetsemani.setTituloPublico("Um Jardim Chamado Getsêmani");
listaobras.adicionarObra(umjardimchamadogetsemani);
var EntrevistaOthon = new Obra_1.Obra();
EntrevistaOthon.setAutor("soniaothon");
EntrevistaOthon.setTitulo("EntrevistaOthon");
EntrevistaOthon.setTituloPublico("Entrevista na Integra");
listaobras.adicionarObra(EntrevistaOthon);
var EntrevistaRacine = new Obra_1.Obra();
EntrevistaRacine.setAutor("racinesantos");
EntrevistaRacine.setTitulo("EntrevistaRacine");
EntrevistaRacine.setTituloPublico("Entrevista na Integra");
listaobras.adicionarObra(EntrevistaRacine);
var EntrevistaIvonete = new Obra_1.Obra();
EntrevistaIvonete.setAutor("ivonetealbano");
EntrevistaIvonete.setTitulo("EntrevistaIvonete");
EntrevistaIvonete.setTituloPublico("Entrevista na Integra");
listaobras.adicionarObra(EntrevistaIvonete);
exports["default"] = listaobras;

},{"./Obra":3}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.Obra = void 0;
var Obra = /** @class */ (function () {
    function Obra() {
    }
    Obra.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Obra.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Obra.prototype.setLink = function (link) {
        this.link = link;
    };
    Obra.prototype.setTituloPublico = function (titulo) {
        this.tituloPublico = titulo;
    };
    Obra.prototype.getTitulo = function () {
        return this.titulo;
    };
    Obra.prototype.getAutor = function () {
        return this.autor;
    };
    Obra.prototype.getLink = function () {
        return this.link;
    };
    Obra.prototype.getTituloPublico = function () {
        return this.tituloPublico;
    };
    return Obra;
}());
exports.Obra = Obra;

},{}]},{},[1]);
