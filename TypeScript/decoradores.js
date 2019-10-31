"use strict";
/*
// Esto es lo mismo
class Villano {
    
    constructor (public nombre:string){

    }
}

// que esto:
class Villano {
    public nombre:String;
    constructor (nombre:string){
        this.nombre = nombre;
    }
}
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Un decorador es una simple funcion.
function consola(constructor) {
    console.log(constructor);
}
let Villano = class Villano {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
Villano = __decorate([
    consola
], Villano);
