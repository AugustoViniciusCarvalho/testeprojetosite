window.onload = console.log(localStorage.getItem("r"));

let r = localStorage.getItem("r");

let texto = document.getElementById("texto");
let imagem = document.getElementById("imagem");
imagem.src = `Obras Imagens/${r}.png`;
texto.data = `Obras textos/${r}.txt`;

function lerCompleto(){
  if (r == "aabelinhasonhadora"){
    window.location.href = "https://drive.google.com/file/d/1iGlIZP4fEweX3DLlM9Rp7u8h0nHh4XXa/view?usp=sharing";
  } else if (r == "aguerradosplanetas"){
    window.location.href = "https://drive.google.com/file/d/1R081_ZQujUP6SNUWifsGnt85sepyNonS/view?usp=sharing";
  } else if (r == "aloucadamontanha"){
    window.location.href = "https://drive.google.com/file/d/1M-4kmZ-nKXEMRki_dFEdjXI2Q5icSa97/view?usp=sharing";
  } else if (r == "amanhaquemsabe"){
    window.location.href = "https://drive.google.com/file/d/18JVDRSydfUDfo_p15KtGVqTG4xfkcMOM/view?usp=sharing";
  } else if (r == "aprovidencia"){
    window.location.href = "https://drive.google.com/file/d/1BIHwmeDFKDHBXgFpEvl4WS56QVrsdIio/view?usp=sharing";
  } else if (r == "astresdatas"){
    window.location.href = "https://drive.google.com/file/d/1bgjm29MMP1ZzQC3dDe_YdqK54q8KTZ1J/view?usp=sharing";
  } else if (r == "aloucadamontanha"){
    window.location.href = "https://drive.google.com/file/d/1M-4kmZ-nKXEMRki_dFEdjXI2Q5icSa97/view?usp=sharing";
  } else if (r == "avemaria"){
    window.location.href = "https://drive.google.com/file/d/1716gOeZ-J2VwdHvr54XEgakh9gQTDR8F/view?usp=sharing";
  } else if (r == "brasileiroseportugueses"){
    window.location.href = "https://drive.google.com/file/d/1EaJuRIvA6Aljewxg2qtr5yfUq1MIkVnw/view?usp=sharing";
  } else if (r == "cabecadomundo"){
    window.location.href = "https://drive.google.com/file/d/1BKQDRYrBloyATmL8rN8uOcygC1ODnKMv/view?usp=sharing";
  } else if (r == "caodefila"){
    window.location.href = "https://drive.google.com/file/d/1wUSy9zFEXc4Xx7f5IUKVy83MAD3Lsnz2/view?usp=sharing";
  } else if (r == "compraseummarido"){
    window.location.href = "https://drive.google.com/file/d/1Ls57tIxR0ge7b_SGvQL-YslQPr-QFwXD/view?usp=sharing";
  } else if (r == "dialogodasestrelas"){
    window.location.href = "https://drive.google.com/file/d/13Tg_vzP-vvB1oMYomCKK2uDPhsTgzgVk/view?usp=sharing";
  } else if (r == "formacaorural"){
    window.location.href = "https://drive.google.com/file/d/1yuLmRpdvBmfFJHxFhpdQ4V9SEXKQIyka/view?usp=sharing";
  } else if (r == "oanjodameianoite"){
    window.location.href = "https://drive.google.com/file/d/1eg7ro-dqRO6o0EBLIHqYbZEPB1yf1jCk/view?usp=sharing";
  } else if (r == "ocarrasco"){
    window.location.href = "https://drive.google.com/file/d/1Oq_M4ZCuaRl-hRMT_vftbA57hpW-yBfL/view?usp=sharing";
  } else if (r == "omenordosmeusirmaos"){
    window.location.href = "https://drive.google.com/file/d/1RBgSt2l6yZCdXp8GFN9DEfCMQykgQuZp/view?usp=sharing";
  } else if (r == "onatalnoespacosideral"){
    window.location.href = "https://drive.google.com/file/d/1WoPzg1bM0N57R2SUhhTRa6fN3PKi5Pgw/view?usp=sharing";
  } else if (r == "osanjosdoclaustro"){
    window.location.href = "https://drive.google.com/file/d/1PLQb7_UpIUNIGZ1hNitIANb0563YbdoM/view?usp=sharing";
  } else if (r == "pelasgrades"){
    window.location.href = "https://drive.google.com/open?id=18d7KxjLRgAyBeYBuptDbGnuSLJpzsL4s";
  } else if (r == "pertinhodoceu"){
    window.location.href = "https://drive.google.com/open?id=1OadEmV7pT8VJrSZ2U16s6PC9EdTKrNnh";
  } else if (r == "seusoldonalua"){
    window.location.href = "https://drive.google.com/file/d/1kW584CwU0XJvmaJMGwMejk6PanPDjnVp/view?usp=sharing";
  } else if (r == "umjardimchamadogetsemani"){
    window.location.href = "https://drive.google.com/file/d/1q0eMAjkWWn3lB5pMWU8sfS33psEnPrzn/view?usp=sharing";
  } else if (r == "umrestodehomem"){
    window.location.href = "https://drive.google.com/file/d/1bZqj1FKfDmTMewMav1S9_3jG3y2r34gI/view?usp=sharing";
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunctionGaleria() {
  document.getElementById("myDropdownGaleria").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content");
    var dropdowns2 = document.getElementsByClassName("dropdown-contentGaleria");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown = dropdowns1[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown = dropdowns2[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function tipo(t){
  console.log(localStorage.setItem("t", t.target.id));
  window.location.href="artistas.html";
}

function tipoGaleria(t){
console.log(localStorage.setItem("t", t.target.id));
window.location.href="galeria.html";
}