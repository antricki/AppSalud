
class Paciente{

    constructor(nombre, apellidos, strFecha) {

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = new Date(strFecha);
        this.registroBascula = null;

    }
    saludar(){
        return "Hola soy " +  this.nombre + " " + this.apellidos;
    }

    obtenerNombre(){
        return this.nombre;
    }
    modificarNombre(nombre){
        this.nombre=nombre;
    }
    obtenerApellidos(){
        return this.apellidos;
    }
    modificarApellidos(apellidos) {
        this.apellidos=apellidos;
    }
    obtenerFechaNacimiento(){
        return this.fechaNacimiento;
    }
    modificarFechaNacimento(fecha){
        this.fechaNacimiento = new Date(fecha);
    }
    obtenerEdad(){
        var diferencia = Date.now() - this.fechaNacimiento.getTime();
        var edad = new Date(diferencia);
        return Math.abs(edad.getUTCFullYear() - 1970);
    }
    modificarBascula(bascula){
       this.registroBascula = bascula; 
    }
    obtenerBascula(){
        return this.registroBascula;
    }
    calcularIMC(){
        if (this.registroBascula != null){
            return this.registroBascula.calcularIMC();
        }
    }
}
module.exports = Paciente;

//let met = new Paciente();
//met.obtenerEdad();
//console.log(met.obtenerEdad());