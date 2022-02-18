/** ----------------------------------------------------------------
 *                        Función await
 * ----------------------------------------------------------------
 * Una función async puede contener una expresión await, la cual pausa la ejecución de la 
 * función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda 
 * la ejecución de la función async y devuelve el valor resuelto.
 * @returns Dios
 */

async function miFuncionPromesaYAwait(){
    let promise = new Promise(resolver => {
        resolver('Promesa con await funcionando');
    });
    console.log(await promise); 
}
miFuncionPromesaYAwait();