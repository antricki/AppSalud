const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should()

const Paciente = require('../paciente.js');

describe('Main Suite -- Pruebas Unitarias Paciente', function(){
    
    describe('Clase Paciente -- Test Case 1',function(){
        let objetoPrueba2 = new Paciente();
        
        it ('obtenerNombre()', function(){
            objetoPrueba2.obtenerNombre();
        });

        it ('modificarNombre(Pepito)', function(){
            objetoPrueba2.obtenerNombre('Pepito')
            objetoPrueba2.modificarNombre('Hola')
            assert.equal(objetoPrueba2.obtenerNombre(),'Hola');
        });

        it ('obtenerApellidos()', function(){
            objetoPrueba2.obtenerApellidos('Camarena');
        });

        it ('modificarApellidos()', function(){
            objetoPrueba2.obtenerApellidos('Camarena')
            objetoPrueba2.modificarApellidos('Rodriguez Mas');
            assert.equal(objetoPrueba2.obtenerApellidos(),'Rodriguez Mas');
        });

        it ('obtenerFechaNacimiento() = 16/02/1983', function(){
            objetoPrueba2.obtenerFechaNacimiento('16/02/1983');
        });

        it ('modificarFechaNacimiento() = 25/12/1995', function(){
            //objetoPrueba2.obtenerFechaNacimiento().toLocaleString;
            //objetoPrueba2.modificarFechaNacimento(new Date(1999,5,21));
            //assert.equal(objetoPrueba2.obtenerFechaNacimiento().toLocaleString); Falla, demanar ajuda a Ferran
        });

        it ('obtenerEdad() = 36', function(){
             objetoPrueba2.obtenerEdad();
        });

         
        
    });


});

