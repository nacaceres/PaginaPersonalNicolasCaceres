//Uso de estricto
"use strict";
//Arreglo constante que contiene mis canciones favoritas
const canciones = ["Walk", "Chasing Cars", "Belief (Live in LA)","R U Mine?","Snap Out Of It","Mi suerte","Snow"];
//Arreglo constante que contiene los links hacia mis canciones favoritas
const links = ["https://www.youtube.com/watch?v=4PkcfQtibmU","https://www.youtube.com/watch?v=GemKqzILV4w","https://www.youtube.com/watch?v=QiFh26fwdSI","https://www.youtube.com/watch?v=ngzC_8zqInk","https://www.youtube.com/watch?v=1_O_T6Aq85E","https://www.youtube.com/watch?v=sfv0xWONROg","https://www.youtube.com/watch?v=ifXalt3MJtM"];
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