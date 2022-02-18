/** *
 * Caso 1
 */
let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) resolver("Promesa dice: Resolvió correcto");
  else rechazar("Promesa dice: Se produjo un error");
});

//En este caso se cumple la promesa y se usa .then(), para el caso de catch se agrega como un argumento
miPromesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
/** *
 * Caso 2
 */
let miPromesa2 = new Promise((resolver, rechazar) => {
  let expresion2 = false;
  if (expresion2) resolver("Promesa 2 dice: Resolvió correcto");
  else rechazar("Promesa 2 dice: Se produjo un error");
});

//En este caso se cumple la promesa y se usa .then(), pero catch funcionaria si .then() fuera = false;
miPromesa2.then((valor) => console.log(valor)).catch((err) => console.log(err));
