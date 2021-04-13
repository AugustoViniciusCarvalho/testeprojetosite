import listaobras from "./ListaObras";

let e = localStorage.getItem("e");

let obra = listaobras.acharObra(e);

    for (let i = 0; i < obra.length; i++){
        let div = document.createElement("div");
        div.id = "documentositens";
        let p = document.createElement("p");
        p.innerHTML = obra[i].getTituloPublico();
        let img = document.createElement("img");
        img.className = "imagemcinza";
        img.src = `Obras Imagens/${obra[i].getTitulo()}.png`;
        document.getElementById("documentos").appendChild(div);
        let a = document.createElement("a");
        if (obra[i].getTitulo() == "aabelinhasonhadora"){
            a.href = "https://drive.google.com/file/d/1iGlIZP4fEweX3DLlM9Rp7u8h0nHh4XXa/view?usp=sharing";
          } else if (obra[i].getTitulo() == "aguerradosplanetas"){
            a.href = "https://drive.google.com/file/d/1R081_ZQujUP6SNUWifsGnt85sepyNonS/view?usp=sharing";
          } else if (obra[i].getTitulo() == "aloucadamontanha"){
            a.href = "https://drive.google.com/file/d/1M-4kmZ-nKXEMRki_dFEdjXI2Q5icSa97/view?usp=sharing";
          } else if (obra[i].getTitulo() == "amanhaquemsabe"){
            a.href = "https://drive.google.com/file/d/18JVDRSydfUDfo_p15KtGVqTG4xfkcMOM/view?usp=sharing";
          } else if (obra[i].getTitulo() == "aprovidencia"){
            a.href = "https://drive.google.com/file/d/1BIHwmeDFKDHBXgFpEvl4WS56QVrsdIio/view?usp=sharing";
          } else if (obra[i].getTitulo() == "astresdatas"){
            a.href = "https://drive.google.com/file/d/1bgjm29MMP1ZzQC3dDe_YdqK54q8KTZ1J/view?usp=sharing";
          } else if (obra[i].getTitulo() == "aloucadamontanha"){
            a.href = "https://drive.google.com/file/d/1M-4kmZ-nKXEMRki_dFEdjXI2Q5icSa97/view?usp=sharing";
          } else if (obra[i].getTitulo() == "avemaria"){
            a.href = "https://drive.google.com/file/d/1716gOeZ-J2VwdHvr54XEgakh9gQTDR8F/view?usp=sharing";
          } else if (obra[i].getTitulo() == "brasileiroseportugueses"){
            a.href = "https://drive.google.com/file/d/1EaJuRIvA6Aljewxg2qtr5yfUq1MIkVnw/view?usp=sharing";
          } else if (obra[i].getTitulo() == "cabecadomundo"){
            a.href = "https://drive.google.com/file/d/1BKQDRYrBloyATmL8rN8uOcygC1ODnKMv/view?usp=sharing";
          } else if (obra[i].getTitulo() == "caodefila"){
            a.href = "https://drive.google.com/file/d/1wUSy9zFEXc4Xx7f5IUKVy83MAD3Lsnz2/view?usp=sharing";
          } else if (obra[i].getTitulo() == "compraseummarido"){
            a.href = "https://drive.google.com/file/d/1Ls57tIxR0ge7b_SGvQL-YslQPr-QFwXD/view?usp=sharing";
          } else if (obra[i].getTitulo() == "dialogodasestrelas"){
            a.href = "https://drive.google.com/file/d/13Tg_vzP-vvB1oMYomCKK2uDPhsTgzgVk/view?usp=sharing";
          } else if (obra[i].getTitulo() == "formacaorural"){
            a.href = "https://drive.google.com/file/d/1yuLmRpdvBmfFJHxFhpdQ4V9SEXKQIyka/view?usp=sharing";
          } else if (obra[i].getTitulo() == "oanjodameianoite"){
            a.href = "https://drive.google.com/file/d/1eg7ro-dqRO6o0EBLIHqYbZEPB1yf1jCk/view?usp=sharing";
          } else if (obra[i].getTitulo() == "ocarrasco"){
            a.href = "https://drive.google.com/file/d/1Oq_M4ZCuaRl-hRMT_vftbA57hpW-yBfL/view?usp=sharing";
          } else if (obra[i].getTitulo() == "omenordosmeusirmaos"){
            a.href = "https://drive.google.com/file/d/1RBgSt2l6yZCdXp8GFN9DEfCMQykgQuZp/view?usp=sharing";
          } else if (obra[i].getTitulo() == "onatalnoespacosideral"){
            a.href = "https://drive.google.com/file/d/1WoPzg1bM0N57R2SUhhTRa6fN3PKi5Pgw/view?usp=sharing";
          } else if (obra[i].getTitulo() == "osanjosdoclaustro"){
            a.href = "https://drive.google.com/file/d/1PLQb7_UpIUNIGZ1hNitIANb0563YbdoM/view?usp=sharing";
          } else if (obra[i].getTitulo() == "pelasgrades"){
            a.href = "https://drive.google.com/open?id=18d7KxjLRgAyBeYBuptDbGnuSLJpzsL4s";
          } else if (obra[i].getTitulo() == "pertinhodoceu"){
            a.href = "https://drive.google.com/open?id=1OadEmV7pT8VJrSZ2U16s6PC9EdTKrNnh";
          } else if (obra[i].getTitulo() == "seusoldonalua"){
            a.href = "https://drive.google.com/file/d/1kW584CwU0XJvmaJMGwMejk6PanPDjnVp/view?usp=sharing";
          } else if (obra[i].getTitulo() == "umjardimchamadogetsemani"){
            a.href = "https://drive.google.com/file/d/1q0eMAjkWWn3lB5pMWU8sfS33psEnPrzn/view?usp=sharing";
          } else if (obra[i].getTitulo() == "umrestodehomem"){
            a.href = "https://drive.google.com/file/d/1bZqj1FKfDmTMewMav1S9_3jG3y2r34gI/view?usp=sharing";
          }
          else if (obra[i].getTitulo() == "ivoneteI"){
            a.href = "https://drive.google.com/file/d/1sAleH3jYYKUeSORJ8eA_CAx3g3sxAZXq/view?usp=sharing";
          }
          else if (obra[i].getTitulo() == "ivoneteII"){
            a.href = "https://drive.google.com/file/d/1-Sul0ejS--3d3yoklp7OgXvcpn_xlFnl/view?usp=sharing";
          }
          else if (obra[i].getTitulo() == "ivoneteIII"){
            a.href = "https://drive.google.com/file/d/1JBH0tbL5bJE1nTaiMDFiXQKNe9ApNMfK/view?usp=sharing";
          }
          else if (obra[i].getTitulo() == "ivoneteIV"){
            a.href = "https://drive.google.com/file/d/1kc3DIphDjjkVMxj1Ef0NGonuKoTrr4vf/view?usp=sharing";
          }
          else if (obra[i].getTitulo() == "EntrevistaOthon"){
            a.href = "https://youtu.be/kv_zWv74mhc";
          }
          else if (obra[i].getTitulo() == "EntrevistaRacine"){
            a.href = "https://youtu.be/dco3g3T1a2g";
          }
          else if (obra[i].getTitulo() == "EntrevistaIvonete"){
            a.href = "https://youtu.be/Xkt59hgBy28";
          }

          
          a.appendChild(img);
          div.appendChild(p);
          div.appendChild(a);
        }

        if (document.getElementById("documentos").childElementCount == 0){
          document.getElementById("documentos").remove();
          document.getElementById("titulodoc").remove();
        }