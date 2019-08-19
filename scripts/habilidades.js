//Uso de estricto
"use strict";
//Arreglo constante que contiene mis habilidades
const habilidades = ["Conocimiento Alto en Java", "Conocimiento Alto en Python", "Conocimiento Medio en SQL","Conocimiento Medio en CSS","Conocimiento Medio en HTML","Guitarrista","Baterista"];
//Contador para iterar sobre mis habilidades
let contadorHab = 0;
// Obtener el tag <h1> que va a mostrar mis habilidades mediante el DOM.
let elemHab = document.getElementById("habilidades");
/*
Funcion Cambiar
Params: no tiene.
Se encarga de actualizar las habilidades cada 2 seg.
Return: no tiene.
*/
function cambiar() {
  elemHab.innerHTML = habilidades[contadorHab];
  contadorHab++;
  if (contadorHab >= habilidades.length) {
    contadorHab = 0;
  }
}
// Set interval es el encargado de llamar la funcion cambiar cada 2 segundos
setInterval(cambiar, 1000);