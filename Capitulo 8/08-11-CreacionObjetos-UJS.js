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

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());
console.log(hermano.nombreCompleto());

padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );

// Formas de crear variables, objetos o elementos, mas breve mejor sintaxis

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};



