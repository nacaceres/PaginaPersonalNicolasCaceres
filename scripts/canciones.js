//Uso de estricto
"use strict";
//Arreglo constante que contiene mis canciones favoritas
const canciones = ["Welcome", "Hi", "Sup dude"];
//Arreglo constante que contiene los links hacia mis canciones favoritas
const links = ["https://www.youtube.com/watch?v=1btEYjhcIII","https://www.youtube.com/watch?v=OuWaE8UDKe8","https://www.youtube.com/watch?v=_obsnLp-v8o"];
//Contador para iterar sobre mis canciones favoritas
let contadorCan = 0;
//Obtener elag <a> que va a mostrar mis canciones favoritas mediante el DOM
let elemCan = document.getElementById("canciones");
/*
Funcion Cambiar
Params: no tiene.
Se encarga de actualizar las canciones favoritas con sus respectivos enlaces cada 2 seg.
Return: no tiene.
*/
function cambiar() {
  elemCan.innerHTML = canciones[contadorCan];
  elemCan.href = links[contadorCan];
  contadorCan++;
  if (contadorCan >= canciones.length) {
    contadorCan = 0;
  }
}
// Set interval es el encargado de llamar la funcion cambiar cada 2 segundos
setInterval(cambiar, 2000);