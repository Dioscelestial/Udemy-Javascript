/*************************************************************************************************/
/** Este es un proyecto para usar "Programming oriented to Objects"
 * Con el manejo de 2 class 'Orden' y 'Producto' simulamos la compra de una tiendita de abarrotes de maximo 5 productos.
 * @author Jack
 ************************************************************************************************/
class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    // Usamos Mayusculas para señalar que es una "constante" y se usa "(){}" porque es un metodo.
    return 5; // Devolvemos el valor de 5 porque 5 sera el limite de objetos creados por el constructor.
  }
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    // this._contadorProductosAgregados = 0;
  }
  get idOrden() {
    return this._idOrden;
  }
  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto); // El metodo push permite agregar el producto al arreglo
      /** Otra sintaxis para esto seria
       *  this._productos[this._contadorProductosAgregados++] = producto; */
    } else {
      console.log(
        `No se pueden agregar mas productos al carrito No.#${this._idOrden}`
      );
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for ("let" producto of this._productos) {
      totalVenta += producto.precio; //Total Venta + Producto.precio
    }
    return totalVenta.toFixed(2); // El metodo toFixed(i) permite establecer cuantos decimales seran impresos en pantalla en este caso "2"
    // Example 12.23123124 => 12.23 
  }
  mostrarOrden() {
    let productosOrden = " ";
    for (let producto of this._productos) {
      productosOrden += "\n" + producto.toString();
    }
    console.log(
      `Orden: ${this._idOrden} /// Total: $${this.calcularTotal()} /// Productos: ${productosOrden}`
    );
  }
}
// Clase de tipo producto - Parte del proyecto de "simulador de tienda"

class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto += Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }
  get ifProducto() {
    return this._idProducto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    return this._nombre === nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    return this._precio === precio;
  }
  toString() {
    // El uso de template literal permite usar de forma dinamica texto
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
  }
}
// Creamos los objetos de "Producto"
let producto1 = new Producto("Jabon", 19.99);
let producto2 = new Producto("Shampoo", 59.99);
let producto3 = new Producto("Pasta Dental", 39.99);
let producto4 = new Producto("Toalla", 159.99);
let producto5 = new Producto("Hilo dental", 9.99);
// Creamos los objetos de "Orden"
let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();
let orden4 = new Orden();
// Ticket 1
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
// Ticket 2
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
// Ticket 3
orden3.agregarProducto(producto4);
orden3.agregarProducto(producto4);
orden3.agregarProducto(producto1);
orden3.agregarProducto(producto5);
// Ticket 4 -Exceso de productos-
orden4.agregarProducto(producto4);
orden4.agregarProducto(producto5);
orden4.agregarProducto(producto2);
orden4.agregarProducto(producto1);
orden4.agregarProducto(producto3);
orden4.agregarProducto(producto4);
// Imprimir los tickets
orden1.mostrarOrden();
orden2.mostrarOrden();
orden3.mostrarOrden();
orden4.mostrarOrden();

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());
console.log(producto4.toString());
console.log(producto5.toString());
