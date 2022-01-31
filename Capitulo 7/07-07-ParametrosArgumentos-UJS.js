//Declaración Función de tipo Expresión

/* Se pueden añadir valores default en la funcion, pero estos se veran modificados
   si se agregan valores en la funcion. */
// Parametro son los valores que usara la funcion al ser declarada ejem: function(a,b)
// Argumento son los valores que usara la funcion al ser invocada  ejem: function(6,5)
let sumar = function (a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    return a + b + arguments[2];
};

resultado = sumar(1,2,2);
console.log(resultado);