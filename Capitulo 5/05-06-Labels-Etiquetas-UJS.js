inicio: //Label o etiqueta es para indicar funciones de un codigo, No son necesarias y son poco usadas...
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contador);
}