
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE : {nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
let batman:Superheroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface Superheroe {
  nombre:string;
  artesMarciales:string[];
}

function supeheroDetail(batman:Superheroe){
  console.log(`El superheroe se llama ${batman.nombre} y sabe hacer ${batman.artesMarciales}`);
}

supeheroDetail(batman);

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a:number, b:number ){
  return (a + b) * 2
}

let resultadoDbl = (a:number, b:number) => (a + b) * 2;

console.log(`El resultado de la funcion DBL es: ${resultadoDbl(3,5)}`);

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger (nombre:string, arma:string="arco", poder?:string ){
  let mensaje:string;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + arma
  }
  return mensaje;
};

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

  base:number;
  altura:number;

  constructor (base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }

  getArea():number {
    return this.base*this.altura;
  }

}

let rect = new Rectangulo(5,10);
console.log(`El area es ${rect.getArea()}`);