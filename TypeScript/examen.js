"use strict";
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
// Cree una interfaz que sirva para validar el siguiente objeto
let batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
function supeheroDetail(batman) {
    console.log(`El superheroe se llama ${batman.nombre} y sabe hacer ${batman.artesMarciales}`);
}
supeheroDetail(batman);
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
let resultadoDbl = (a, b) => (a + b) * 2;
console.log(`El resultado de la funcion DBL es: ${resultadoDbl(3, 5)}`);
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, arma = "arco", poder) {
    let mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    return mensaje;
}
;
console.log(`El vengador 1 es: ${getAvenger("Ojo de Alcon")}`);
console.log(`El vengador 2 es: ${getAvenger("Iron", "Armadura", "Listo y rico")}`);
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    getArea() {
        return this.base * this.altura;
    }
}
let rect = new Rectangulo(5, 10);
console.log(`El area es ${rect.getArea()}`);
