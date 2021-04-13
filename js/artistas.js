function info(e) {
  console.log(localStorage.setItem("e", e.target.id));
  window.location.href = "artistasinfo.html"
}

window.onload = console.log(localStorage.getItem("t"));

let t = localStorage.getItem("t");

if (t == "ator"){
  $(".artistadiv:not(.ator)").remove();
  $("span:not(.ator)").remove();
} else if (t == "diretor"){
  $("artistadiv:not(.diretor)").remove();
  $("span:not(.diretor)").remove();
} else if (t == "dramaturgo"){
  $("artistadiv:not(.dramaturgo)").remove();
  $("span:not(.dramaturgo)").remove();
} else if (t == "pesquisador"){
  $("artistadiv:not(.pesquisador)").remove();
  $("span:not(.pesquisador)").remove();
} else if (t == "produtor"){
  $("artistadiv:not(.produtor)").remove();
  $("span:not(.produtor)").remove();
} else if (t == "cenógrafo"){
  $("artistadiv:not(.cenógrafo)").remove();
  $("span:not(.cenógrafo").remove();
} else if (t == "figurinista"){
  $("artistadiv:not(.figurinista").remove();
  $("span:not(.figurinista)").remove();
} else if (t == "maquiador"){
  $("artistadiv:not(.maquiador)").remove();
  $("span:not(.maquiador)").remove();
}

function sumir(string){
  for (let i = 0; i < $(string).length + 1; i++) {
    for (let i = 0; i < $(string).length; i++) {
      let id = $(string)[i].id;
      let dramaturgo = document.getElementById(id);
      dramaturgo.remove();
    }
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