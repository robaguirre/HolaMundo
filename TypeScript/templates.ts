

function getNombre(){
    return nombrecillo;
}


let nombrecillo:string = "Juan";
let apellido:string = "Miguel";
let years:number = 37;

// let text = "Hola" + nombre + " " + apellido;

// Respeta los saltos de linea y espacios
let text = `Hola, 
    ${nombrecillo} 
    ${apellido} 
    (${years})`;

// Lo que esta dentro es JS y se puede operar con ello
let texto2:string = `${1+2+4}`;

let texto3:string = `${getNombre()}`;

console.log (texto3);
