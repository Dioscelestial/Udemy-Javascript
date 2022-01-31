//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
// El metodo "prototype" funciona para agregar alguna propiedad a todos los objetos creados con un constructor. 
Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com', 11223344);
padre.tel = '11223344';
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
madre.tel = '66889900';
console.log( madre.tel );


let hermano = new Persona('Jacob', 'Quintero', 'lquintero@mail.com');
madre.tel = '66889900';
console.log( hermano.tel );