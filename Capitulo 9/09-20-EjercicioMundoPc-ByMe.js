/*************************************************************************************************/
/** Este es un proyecto para usar "Programming oriented to Objects"
 *  
 * @author Jack
 ************************************************************************************************/
class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }
  get idOrden() {
    return this._idOrden;
  }
  agregarComputadoras(computadora) {
    this._computadoras.push(computadora);
  }
  mostrarOrden() {
    let computadorasOrden = " ";
    for (let computadora of this._computadoras) {
      computadorasOrden += "\n" + computadora.toString();
    }
    console.log(
      `             /// Orden: ${this._idOrden} /// ${computadorasOrden}`
    );
  }
}

class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
  get idComputadora() {
    return idComputadora;
  }
  get nombre() {
    return nombre;
  }
  set nombre(nombre) {
    return this._nombre === nombre;
  }
  get monitor() {
    return monitor;
  }
  set monitor(monitor) {
    return this._monitor === monitor;
  }
  get teclado() {
    return teclado;
  }
  set teclado(teclado) {
    return this._teclado === teclado;
  }
  get raton() {
    return raton;
  }
  set raton(raton) {
    return this._raton === raton;
  }
  toString() {
    return `\nPCdetails: IdComputadora: ${this._idComputadora} Nombre: ${this._nombre}`;
  }
}
class Monitor {
  static contadorMonitor = 0;
  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitor;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get idMonitor() {
    return this._idMonitor;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    return this._marca === marca;
  }
  get tamaño() {
    return this._tamaño;
  }
  set tamaño(tamaño) {
    return this._tamaño === tamaño;
  }
  toString() {
    return `Monitor: IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño} inch`;
  }
}
class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._marca = marca;
    this._tipoEntrada = tipoEntrada;
  }
  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    return this._tipoEntrada === tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    return this._marca === marca;
  }
  toString() {
    return `Marca: ${this._marca}, TipoEntrada: ${this._tipoEntrada}`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `Teclado: IdTeclado: ${this._idTeclado} ${super.toString()}`;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRaton = 0;
  constructor(tipoEntrada, marca) {
    super(marca, tipoEntrada,);
    this._idRaton = ++Raton.contadorRaton;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return `Raton: IdRaton: ${this._idRaton} ${super.toString()}`;
  }
}
let computador1 = new Computadora("Armada");
let computador2 = new Computadora("Armada");
let computador3 = new Computadora("Prediseñada");
let monitor1 = new Monitor("MSI", 27);
let monitor2 = new Monitor("Samsung", 22.5);
let monitor3 = new Monitor("Razen", 32);
let teclado1 = new Teclado("USB", "Logitech");
let teclado2 = new Teclado("BLUETOOTH", "CoolerMaster");
let teclado3 = new Teclado("USB", "Corsair");
let raton1 = new Raton("Razen", "BLUETOOTH");
let raton2 = new Raton("Logitech", "USB");
let raton3 = new Raton("Corsair", "BLUETOOTH");

// Creamos los objetos de "Orden"
let orden1 = new Orden();
let orden2 = new Orden();

// Computadora 1
orden1.agregarComputadoras(computador1);
orden1.agregarComputadoras(monitor1);
orden1.agregarComputadoras(teclado1);
orden1.agregarComputadoras(raton1);
// Computadora 2
orden2.agregarComputadoras(computador2);
orden2.agregarComputadoras(monitor2);
orden2.agregarComputadoras(teclado2);
orden2.agregarComputadoras(raton2);
// Computadora 3
orden2.agregarComputadoras(computador3);
orden2.agregarComputadoras(monitor3);
orden2.agregarComputadoras(teclado3);
orden2.agregarComputadoras(raton3);

// Imprimir los tickets
orden1.mostrarOrden();
orden2.mostrarOrden();

