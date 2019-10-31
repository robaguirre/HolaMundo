"use strict";
function getNombre() {
    return nombrecillo;
}
let nombrecillo = "Juan";
let apellido = "Miguel";
let years = 37;
// let text = "Hola" + nombre + " " + apellido;
// Respeta los saltos de linea y espacios
let text = `Hola, 
    ${nombrecillo} 
    ${apellido} 
    (${years})`;
// Lo que esta dentro es JS y se puede operar con ello
let texto2 = `${1 + 2 + 4}`;
let texto3 = `${getNombre()}`;
console.log(texto3);
