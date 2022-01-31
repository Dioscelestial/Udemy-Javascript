/**
 * En esta leccion se usara SIMULARA una variable constante con static
 */

 class Persona{
    
    static contadorPersona = 0; 

    /** 
     * Se asigna un limite que no sea posible cambiar, en este caso el 
     * contadorPersona no puede exceder el limite de 5 objetos creados, 
     * sino mostrara un mensaje en consola
    */
    static get MAX_OBJECTS(){ // Usamos el metodo get para asignar un valor de retorno (5)
        return 5;
    }

    constructor(nombre, apellido){ 
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorPersona++;
        /**
         * Utilizamos un if para hacer la operacion logica con el maximo de objetos que
         * no pueden ser superados por los creados.
         */
        if (Persona.contadorPersona <= Persona.MAX_OBJECTS){
            this._idPersona = Persona.contadorPersona;
        }
        else {
            console.log ('Se ha superado el maximo de objetos permitidos');
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

/**
 * Aqui creamos una lista de objetos para hacer la comprobacion del "if" 
 * */
let persona1 = new Persona('Jacob', 'Javier');
let persona2 = new Persona('Javier', 'Alcocer');
let empleado1 = new Empleado('Jason', 'Barcelo', 'Sistemas');
let empleado2 = new Empleado('Cristel', 'Ramirez', 'Diseño');
let empleado3 = new Empleado('Juan', 'Mendoza', 'Cocina');
let empleado4 = new Empleado('Ian', 'Perez', 'Cocina');

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(empleado3.toString());
console.log(empleado4.toString()); 
// El id(empleado4) es undefined ya que no pueden haber mas de 5 objetos

// Al solo usar 'get' no se puede modificar el valor de 5, simulando una variable 'const'
console.log(Persona.MAX_OBJECTS); // 5
Persona.MAX_OBJECTS = 10; 
console.log(Persona.MAX_OBJECTS); // Sigue siendo 5.