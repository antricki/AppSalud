const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

const Bascula = require('../bascula.js');

describe('Main Suite -- Pruebas Unitarias Clase Bascula', function(){
    // CASO TEST 1
    describe('Constructor Báscula -- Test Case 1',function(){
        let objetoPrueba = new Bascula();
        it ('obtenerNumeroAnotaciones() == 0', function(){    
        });
    });
    // CASO TEST 2
    describe('Constructor Báscula -- Test Case 2',function(){
        let objetoPrueba = new Bascula();
        it ('obtenerNumeroAnotaciones() == 0', function(){
            expect (objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(0);         
        });
        it ('obtenerPesoMaximo() == 0', function(){
            expect (objetoPrueba.obtenerPesoMaximo(), 'El peso esperado es cero').to.be.equal(0);      
        });
        it ('obtenerPesoMinimo() == 0', function(){
            objetoPrueba.obtenerPesoMinimo().should.to.be.equal(0);
        });
    });
    // CASO TEST 3
    describe('Clase Báscula -- Test Case 3',function(){
        let objetoPrueba = new Bascula();
        it ('AnotarPeso(65)', function(){
            objetoPrueba.anotarPeso(65);
        });
        it ('ObtenerPesoMaximo(65)', function(){
            expect (objetoPrueba.obtenerPesoMaximo(),'El peso máximo esperado es 65').to.be.equal(65);
        });
    });
    describe('Clase Báscula -- Test Case 3',function(){
        let objetoPrueba = new Bascula();
        it ('anotarPeso (85, 1.83, "1985/04/04")', function(){
            objetoPrueba.anotarPeso(85, 1.83, "1985/04/04");
        });
        it ('CalcularIMC()', function(){
            expect (objetoPrueba.calcularIMC(),'El peso máximo esperado es 25.38').to.be.equal(25.38);
        });
    });
   
});

