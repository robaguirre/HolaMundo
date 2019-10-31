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

// Un decorador es una simple funcion.

function consola(constructor:Function) {
    console.log(constructor);
}

@consola
class Villano  {

    constructor (public nombre:string){

    }
    
}



