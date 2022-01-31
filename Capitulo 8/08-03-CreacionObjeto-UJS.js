// Agregar metodos a objetos
let x = 10;
console.log(x.lenght);

const persona = {
    nombre: "Jason",
    apellido: "Barcelo",
    email: "Jasonfernely@hotmail.com",
    edad: 20,
    nombreCompleto: function (){
        // metodo "this" utlizando paso por referencia.
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto());

console.log(persona)

// Crear un objeto con otra sintaxis

let persona2 = new Object();
persona2.nombre = 'Cristel';
persona2.colonia = 'Emiliano Zapata';
persona2.telefono = '9871140850';

console.log(persona2.telefono)
console.log(persona2)