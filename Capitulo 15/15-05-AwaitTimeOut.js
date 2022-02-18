/** ----------------------------------------------------------------
 *                Función async, await y timeOut
 * ----------------------------------------------------------------
 * Ejemplo usando lo anterior visto
 * @returns Dios
 */
async function miFuncionConPromesaAwaitTimeOut() {
  console.log("Inicio de la funcion");
  let miPromesa = new Promise((resolve) => {
    setTimeout(() => resolve("promesa cargada con await y timeOut"), 3000);
  });
  console.log(await miPromesa);
  console.log("Fin de la funcion.");
}
miFuncionConPromesaAwaitTimeOut();
