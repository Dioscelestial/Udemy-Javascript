// Clases en JavaScript

class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nombreCompleto = function(){
            return this.nombre + ' ' + this.apellidos;
        }
    }
}
// Instancia de clase.
let persona_1 = new Persona('Jason', 'Barcelo Ortiz');
console.log(persona_1);
console.log(persona_1.nombreCompleto());

let persona_2 = new Persona('Cristel', 'Ramirez Cardenas');
console.log(persona_2);
console.log(persona_2.nombreCompleto());