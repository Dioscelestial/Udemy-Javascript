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

// Agregar una propiedad a un objeto

persona.telefono = '9871186364';
console.log(persona);

// Para eliminar una propiedad de un objeto se usa "delete"

delete persona.telefono;
console.log(persona);

// Como mandar a imprimir un objeto en un navegador web

console.log(persona.nombre + ', ' + persona.apellido + ', ' + persona.email + ', ' + persona.edad);

// for in

for (nombreProperty in persona){
    console.log(persona[nombreProperty])
}

// Sintaxis object como un arreglo con el metodo ".values"

let personaArray = Object.values(persona);
console.log(personaArray);

// Convertir objeto en .json mediante metodo " JSON.stringify"

let personaString = JSON.stringify(persona);
console.log(personaString);