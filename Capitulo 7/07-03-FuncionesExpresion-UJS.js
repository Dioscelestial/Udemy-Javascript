// Declaracion  de la función
function miFuncion(a, b) {
    return a + b;
}
// Llamando la funcion
let resultado = miFuncion(4,10);
console.log(resultado);

// Declaración Función de tipo expresión
let Sumar = function (a, b) {return a + b};

resultado = Sumar(1,2);
console.log(resultado);