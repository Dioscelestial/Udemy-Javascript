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
