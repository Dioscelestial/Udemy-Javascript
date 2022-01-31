let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log( resultado );

function sumarTodo(){
    let suma = 0;
    for(let j = 0; j <arguments.length; j++){
        suma += arguments[j];
    }
    return suma;
}