class Persona{
    
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
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
        return this._nombre + ' ' + this._apellido;
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
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );

// Una metodo static se asocia con una clase, pero no con los objetos.
//persona1.saludar(); no es posible llamar un método static desde un objeto

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

 // El resultado se puede ver donde se declaro el metodo static con "Quokka"