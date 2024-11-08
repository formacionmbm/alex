function toUpperCase() {
  let texto = document.getElementById("texto").value;
  //poner texto a mayusculas
  document.getElementById("texto").value = texto.toUpperCase();
}
function toUpperCasePropioElemento(element) {
  //poner texto a mayusculas
  element.value = element.value.toUpperCase();
}


window.onload=() =>{


let element = document.getElementById("tecto");

/*element.addEventListener("onjeyup", () => toUpperCasePropioElemento(this));*/

/*element.addEventListener("keyup",function(){
toUpperCase();
});*/

elemento.addEventListener("keyup",(event) =>{
  event.target.value = event.target.value.toUpperCase();
});
}