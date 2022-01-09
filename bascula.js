
class Bascula {

    constructor() {
        this.pesos = [];
        this.alturas = [];
        this.fechas = [];
        this.anotaciones = 0;
    }
    obtenerNumeroAnotaciones(){
        return this.anotaciones;
        // Prueba Git
    }
    anotarPeso(peso,altura = 1,fecha = Date.now()){
        this.pesos.push(peso); 
        this.alturas.push(altura);
        this.fechas.push(fecha);
        this.anotaciones++;
    
    }
    obtenerPesoMaximo(){
        return Math.max(this.pesos);

    }
    obtenerPesoMinimo(){
        return Math.min(this.pesos);

    }
    calcularIMC(){

        
        return  this.redondear(this.pesos[this.pesos.length -1] / Math.pow(this.alturas[this.alturas.length-1],2));

    }
    redondear(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }
    describirIMC(imc){
        
        if (imc < 16){
            return "Infrapeso (delgadez severa)";
        }else if (imc >=16 && imc <17){
            return "Infrapeso (delgadez moderada)";   
        }else if (imc >=17  && imc <18.5){
            return "Infrapeso (delgadez aceptable)";   
        }else if (imc >=18.5 && imc <25){
            return "Peso normal";   
        }else if (imc >=25 && imc <30){
            return " Sobrepeso";   
        }else if (imc >=30 && imc <35){
            return "Obeso (Tipo I)";   
        }else if (imc >=35 && imc <40){
            return "Obeso (Tipo II)";   
        }else {
            return "Obeso (Tipo III)";
        }

    }

}
module.exports = Bascula;

//Pruebas abtes de ejecutar mocha

/*let b1 = new Bascula();
b1.anotarPeso(65);
console.log(b1.calcularIMC());*/

//let b2 = new Bascula();
//b2.anotarPeso(85, 1.83, "1985/04/04");
//console.log(b2.calcularIMC());


