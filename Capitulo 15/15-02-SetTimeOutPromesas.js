/** *
 * Promesa con el metodo setTimeout
 */
let promesa = new Promise((resolver) => {
  console.log("Inicio de la promesa");
  setTimeout(() => resolver("Saludos con promesa y timeOut", 4000));
  console.log("Final de la promesa");
});
promesa.then((valor) => console.log(valor));
