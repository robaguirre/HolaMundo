"use strict";
let avenger = {
    aname: "Steve",
    clave: "Capitan",
    poder: "Droga"
};
// let nombre = avenger.nombre;
// Con esto sacamos las propiedades a variables.
// Va por nombre de variable
let { aname, clave, poder } = avenger;
// para poner alias
let { aname: myname, clave: myclave, poder: mypoder } = avenger;
console.log(myname, myclave, mypoder);
// Destructuracion de arrays. Va por orden
let avengers = ["Thor", "Steve", "Tony"];
let [thor, capi, ironman] = avengers;
console.log(thor, capi, ironman);
// Tiene que respetar las posiciones.
let [, , iron] = avengers;
console.log(iron);
