// El metodo constructor empieza con mayuscula

// Un constructor sirve para crear mas de un objeto de manera sencilla
function Persona(nombre, apellidos, email){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
}

let padre = new Persona('Javier', 'Barceló Alcocer', 'JavierBarceló@');
let madre = new Persona('Brisa', 'Ortiz Kú', 'BrisaOrtiz@');
let hermano = new Persona('Jacob', 'Barceló Ortiz', 'JacobBarceló@');

console.log(padre);
console.log(madre);
console.log(hermano);
