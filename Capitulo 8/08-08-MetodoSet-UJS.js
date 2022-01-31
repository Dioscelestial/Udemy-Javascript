let = persona = {
    nombre: "Jason",
    apellidos: "Barceló Ortiz",
    email: "barcel@barcel",
    edad: "20",
    idioma: 'es',
    get lang(){
// El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
        return this.idioma.toUpperCase();
    },
    set lang( lang ) {
        this.idioma = lang.toUpperCase();
    }
    ,
    get nombreCompleto() { 
        return this.nombre + " " + this.apellidos;
    }
}

console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);