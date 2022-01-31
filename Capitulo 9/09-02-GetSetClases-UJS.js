// Clases en JavaScript

class Persona {
    constructor(nombre, apellidos) {  // El metodo 'Get' no se puede llamar igual que la 'propiedad'
        // Es una practica comun utilizar '_' antes del nombre de una propiedad y en el metodo el nombre correcto.
        this._nombre = nombre;
        this._apellidos = apellidos;
    }
    //Metodo get
    get nombre() { // Este es un ejemplo.
        return this._nombre; 
    }
    //Metodo set
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
// Instancia de clase.
let persona_1 = new Persona('Jason', 'Barcelo Ortiz');

// Uso de set
persona_1.nombre = 'Juan'; // set nombre('Juan')

// Uso de get
console.log(persona_1.nombre); // get nombre
