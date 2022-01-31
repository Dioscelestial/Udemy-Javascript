// Tambien se pueden heredar metodos con javascript, un ejemplo a continuacion

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
    // El metodo se declara en la clase 'padre'
    nombreCompleto() {
        return this._nombre + ' ' + this._apellidos;
    }
}
class Empleado extends Persona{
    constructor(nombre, apellidos, departamento) {
        super(nombre, apellidos); 
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
console.log(persona_1.nombreCompleto());

// Y se puede utilizar de manera sencilla en la clase 'hijo'

let empleado_1 = new Empleado('Cristel', 'Ramirez Cardenas', 'Diseño');
console.log(empleado_1.nombreCompleto());

