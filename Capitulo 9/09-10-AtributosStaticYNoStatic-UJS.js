class Persona{
    
    static contadorObjetosPersona = 0; // Atributo de la clase

    email = 'Valor default email'; // Atributo de los objetos
    
    constructor(nombre, apellido){ // Atributos de un constructor determinado en ciertos objetos
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
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
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
let persona2 = new Persona('Angelica', 'Ramirez');
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
Persona.saludar();
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

// Atributo de los objetos

console.log(persona1.email);
console.log(empleado1.email);

// Atributo de los objetos desde la clase (undefined)

console.log(Persona.email);
console.log(Empleado.email);