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
    // Aqui se declara un metodo en la clase 'padre' que sera utilizado en la clase 'hijo'
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Aquie se usa la Sobreescritura de un metodo que se declaro en la clase 'padre' y se modifico en la clase 'hijo'
    nombreCompleto(){ // Como llamar metodos definidos en la clase padre.
        return super.nombreCompleto() + ', ' + this._departamento; // Se usa super para invocar el metodo creado en la clase 'padre' y adquirir sus datos y reutilizar codigo
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() ); //El metodo se utiliza en la clase 'hijo' con los datos y su modificacion (departamento)