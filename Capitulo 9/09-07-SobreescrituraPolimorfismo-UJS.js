// El metodo del objeto en la clase ''padre'' (Object.prototype.toString) sera modificado usando la Sobreescritura

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
    /** Sobreescribiendo el metodo de la clase Padre (Object) simplificado 
     * El metodo .toString devuelve una cadena que representa al objeto.
     * @returns Jack
     */
    toString(){
        /**
         *Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
         el metodo que se ejecuta depende si es una referencia de tipo ''padre'' 
         o de tipo 'hijo' 
         */
        return this.nombreCompleto();
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

// Se utiliza el metodo con la referencia de la clase 'padre'
console.log( persona1.toString() );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');

// Aqui se solicita la misma informacion pero no se visualiza en navegador
console.log( empleado1.nombreCompleto.toString() );

// Se utiliza el metodo con la referencia de la clase 'hijo'
console.log( empleado1.toString());