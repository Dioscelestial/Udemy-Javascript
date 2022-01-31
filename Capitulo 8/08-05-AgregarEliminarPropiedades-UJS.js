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