/* Trabajar con clases, no aplica el concepto de hoisting.
hoisting es el poder invocar la funcion, clase o variable antes de crearla.
*/
//// let persona_2 = new Persona('Karla', 'Martinez');

// Como se puede ver, NO se puede aplica

class Persona {
    constructor(nombre, apellidos) {
        this._nombre = nombre;
        this._apellidos = apellidos;
    }
    get nombre() {
        return this._nombre; 
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
let persona_1 = new Persona('Jason', 'Barcelo Ortiz');

let persona_2 = new Persona('Karla', 'Martinez');
console.log(persona_2);

