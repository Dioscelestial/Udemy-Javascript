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

// Como acceder a las propiedades de un objeto

console.log(persona.nombre);
console.log(persona['apellido']);
console.log(persona.nombreCompleto())

// Como recorrer todas las propiedades de un objeto con un ciclo for
// For in 

for(nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad]);
}