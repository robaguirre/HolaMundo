
// Problema. 
// Si se quiere usar una propiedad hay que usr siempre el mismo nombre.

function enviarMision(xmen:{nombre:string}){

    console.log("Enviado a: " + xmen.nombre);

}

function enviarCuartel(xmen:{nombre:string}){

    console.log("Enviado al cuartel: " + xmen.nombre);

}

let lobezno = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};

enviarMision(lobezno);

// Solucion. 
// Aplico intefaces al objeto, de esta forma no hay opcion de error.
interface Xmen {
    nombre:string,
    poder:string,
    perro():number
}

let lobezno2:Xmen = {
    nombre: "Wolverine",
    poder: "Regeneracion",
    perro(){return 5;}
};

function enviarMision2(xmen:Xmen){

    console.log("Enviado a: " + xmen.nombre);

}

enviarMision2(lobezno2);
