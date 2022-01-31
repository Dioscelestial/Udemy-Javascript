// La herencia en javascript permite 'heredar' desde una clase 'Padre' a una clase 'hijo', reutilizando codigo y siendo mas 

// 'UML' Es una herramienta muy utilizada para visualizar la herencia de las clases.

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
    get apellidos() {
        return this.apellidos; 
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
}
// Con 'extends' se heredan todos los metodos y propiedades de la clase 'padre' (Persona) a la clase 'hijo' (Empleado)
// Para poder crear objetos de la clase 'hija' (Empleado) se utiliza la palabra 'super'
class Empleado extends Persona{
    constructor(nombre, apellidos, departamento) {
        super(nombre, apellidos); // Aqui se llama al contructor de la clase 'padre'.
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
}
let persona_1 = new Persona('Jason', 'Barcelo Ortiz');
console.log(persona_1);

let empleado_1 = new Empleado('Cristel', 'Ramirez Cardenas', 'Diseño');
console.log(empleado_1)

//Funciona con exito!

