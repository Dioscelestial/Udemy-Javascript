/**
 * Ejercicio de Herencia realizado por mi!
 */
class Persona {
  static contadorPersonas = 0;
  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    return this._nombre === nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    return this._apellido === apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    return this._edad === edad;
  }
  toString() {
    return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    return this._sueldo === sueldo;
  }
  toString() {
    return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
  }
}

class Client extends Persona {
  static contadorClientes = 0;
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._idClient = ++Client.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }
  get idClient() {
    return this._idClient;
  }
  get fechaRegistro() {
    return this._fechaRegistro;
  }
  set fechaRegistro(fechaRegistro) {
    return this._fechaRegistro === fechaRegistro;
  }
  toString() {
    return `${super.toString()} ${this._idClient} ${this._fechaRegistro}`;
  }
}
let persona1 = new Persona("Jason", "Barcelo", 20);
let persona2 = new Persona("Cristel", "Ramirez", 19);
let empleado1 = new Empleado("Jacob", "Barcelo", 20, 2500);
let empleado2 = new Empleado("Javier", "Barcelo", 20, 2600);
let client1 = new Client("Juan", "Franklin", 58, new Date());
let client2 = new Client("Mike", "San", 45, new Date());

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(client1.toString());
console.log(client2.toString());

console.log(persona1);
console.log(persona2);
console.log(empleado1);
console.log(empleado2);
console.log(client1);
console.log(client2);
