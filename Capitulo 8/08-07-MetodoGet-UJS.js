let = persona = {
    nombre: "Jason",
    apellidos: "Barceló Ortiz",
    email: "barcel@barcel",
    edad: "20",
    
    /* Utilizaremos get como metodo en lugar de function, de esa manera al momento de imprimir
    la informacion contenida no se mostrara como [*:nombreVariable]
    // nombreCompleto: function (){
        // metodo "this" utlizando paso por referencia.
        // return this.nombre + " " + this.apellido;
    // } */
    get nombreCompleto() { 
        return this.nombre + " " + this.apellidos;
    }
}

console.log(persona.nombreCompleto)