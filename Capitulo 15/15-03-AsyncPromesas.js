/** ----------------------------------------------------------------
 *                        Función async
 * ----------------------------------------------------------------
 * La declaración de función async define una función asíncrona, la cual devuelve un objeto
 * @returns Dios
 */

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}
miFuncionConPromesa().then(valor => console.log(valor));