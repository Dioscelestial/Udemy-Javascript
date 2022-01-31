/**
 * Este es un Ejemplo mas claro de como funciona static
 */

class Persona{
    
    static contadorPersona = 0; 

    constructor(nombre, apellido){ 
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorPersona++;
        // Aqui creamos un identificador(id) unico por objeto de la clase mediante static
        this._idPersona = Persona.contadorPersona;
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
 * Usamos el metodo toString() para pasar a texto y tener un visualizacion mas sencilla.
 * El _idPersona se observa al principio del objeto siendo un identificador unico, ya que se crea cuando
 * existe un nuevo objeto, el metodo static se aplica a los objetos porque se paso de
 * Persona.ContadorPersona(Manipulable para clase) => this._idPersona(Manipulable para objetos)
 * */
let persona1 = new Persona('Jacob', 'Javier');
console.log(persona1.toString());
console.log(persona1);

let empleado1 = new Empleado('Jason', 'Barcelo', 'Sistemas');
console.log(empleado1.toString());
console.log(empleado1);

let empleado2 = new Empleado('Cristel', 'Ramirez', 'Diseño');
console.log(empleado2.toString());
console.log(empleado2);