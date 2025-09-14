const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //esta es una función 

console.log( numero1.toString() ); // este es un método

// Función que suma dos números
function sumar() {
    console.log(numero1 + parseInt(numero2));
}

sumar();

// Función que multiplica dos números
function multiplicar() {
    console.log(numero1 * parseInt(numero2));
}

multiplicar();

// Función que divide dos números
function dividir() {
    console.log(numero1 / parseInt(numero2));
}

dividir();

// Función que resta dos números
function restar() {
    console.log(numero1 - parseInt(numero2));
}

restar();

// Función que calcula el resto de una división
function calcularResto() {
    console.log(numero1 % parseInt(numero2));
}

calcularResto();