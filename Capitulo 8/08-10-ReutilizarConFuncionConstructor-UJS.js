//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Javier', 'Barceló Alcocer', 'JavierBarceló@');
let madre = new Persona('Brisa', 'Ortiz Kú', 'BrisaOrtiz@');
let hermano = new Persona('Jacob', 'Barceló Ortiz', 'JacobBarceló@');

console.log(padre);
console.log(madre);
console.log(hermano);

console.log(padre.nombreCompleto())
console.log(madre.nombreCompleto())
console.log(hermano.nombreCompleto())