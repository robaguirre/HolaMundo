"use strict";
/*
let miFuncion = function (a:string){
    return a;
}


let miFuncionF = (a:string) => a;


console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));


let miFuncion2 = function (a:number, b:number){
    return a+b;
}

let miFuncion2F = (a:number, b:number) => a+b;

console.log(miFuncion2(1,5));
console.log(miFuncion2F(2,6));


let miFuncion3 = function (nombre:string){
    nombre =  nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre =  nombre.toUpperCase();
    return nombre;
};
*/
// El this dentro de la funcion hace referencia a window, 
// no a Hulk. Se necesita una funcion flecha.
let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(function () {
            //console.log(this.nombre + " smash !!!");
        }, 1500);
    }
};
// En la funcion flecha el this es el mismo del objeto.
let hulk2 = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => console.log(this.nombre + " smash !!!"), 1500);
    }
};
hulk2.smash();
