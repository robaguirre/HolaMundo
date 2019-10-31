
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

    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelar:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}


let antman:Avenger = new Avenger("AntaMant", "Capitan", "Scott");


console.log(antman);