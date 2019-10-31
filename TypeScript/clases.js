"use strict";
/*
class Avenger {

    nombre:string = "";
    equipo:string = "";
    nombreReal:string = "";

    puedePelar:boolean = false;
    peleasGanadas:number = 0;

    constructor(){
        console.log("Se ejecuto el Constructor");
    }
}
*/
class Avenger {
    constructor(nombre, equipo, nombreReal) {
        this.puedePelar = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}
let antman = new Avenger("AntaMant", "Capitan", "Scott");
console.log(antman);
