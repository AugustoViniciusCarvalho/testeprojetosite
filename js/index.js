function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunctionGaleria() {
    document.getElementById("myDropdownGaleria").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function tipo(t){
    console.log(localStorage.setItem("t", t.target.id));
    window.location.href="artistas.html"
}

function tipoGaleria(t){
  console.log(localStorage.setItem("t", t.target.id));
  window.location.href="galeria.html";
}
