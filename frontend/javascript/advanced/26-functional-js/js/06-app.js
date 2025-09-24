//Funciones puras o Pure Functions
//Una función pura es una función que, dado un mismo conjunto de entradas, siempre devuelve el mismo resultado 
// y no tiene efectos secundarios observables.
const sumar = n => n + 3;

const numero1 = 10;

const resultado = sumar(numero1);

console.log(resultado); // 15

