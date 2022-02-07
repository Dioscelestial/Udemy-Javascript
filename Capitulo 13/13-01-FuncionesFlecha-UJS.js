let miFuncion = function (){
    console.log('saludos desde mi función');
}

const miFuncionFlecha = () => {
    console.log('saludos desde mi función flecha');
}
// las funciones fecha no aplican el concepto de hoisting.   
miFuncionFlecha(); console.error();


