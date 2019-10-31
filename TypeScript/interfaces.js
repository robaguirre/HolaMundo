"use strict";
// Problema. 
// Si se quiere usar una propiedad hay que usr siempre el mismo nombre.
function enviarMision(xmen) {
    console.log("Enviado a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviado al cuartel: " + xmen.nombre);
}
let lobezno = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(lobezno);
let lobezno2 = {
    nombre: "Wolverine",
    poder: "Regeneracion",
    perro() { return 5; }
};
function enviarMision2(xmen) {
    console.log("Enviado a: " + xmen.nombre);
}
enviarMision2(lobezno2);
