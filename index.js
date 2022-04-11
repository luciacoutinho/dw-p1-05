"use strict";

/* TODO */
/* < h3 > Consigna < /h3> <
 p > Hay dos botones: < /p> <
 p > -El primero dice“ Ingresar un número”, que al hacerle click una función debe ingresar un número entero. < /p> <
 p > -El segundo dice“ Mostrar paridad del número”, que al hacerle click una función debe mostrar mediante console.info si el número es par, impar o cero. < /p> <
 p > -Se deben validar los valores ingresados y dar un mensaje apropiado. < /p>

 <
 button onclick = "ingresar()" > Ingresar siglas de la carrera < /button> <
 button onclick = "mostrar()" > Mostrar carrera < /button> */

var num

function ingresar() {

 do {
  num = prompt('Ingrese un número');

  if (isNaN(num)) {
   alert('Por favor ingrese solo caractéres numéricos')
  }
 } while (isNaN(num))
}
console.log(num)

function mostrar() {


 if (num === undefined) {
  alert("Primero debe ingresar un número clickeando en el otro botón")
 } else if (num === "0") {
  alert('El número ingresado es 0')
 } else if (num % 2 === 0) {
  alert('El número ingresado es par')
 } else {
  alert('El número ingresado es impar')
 }
}