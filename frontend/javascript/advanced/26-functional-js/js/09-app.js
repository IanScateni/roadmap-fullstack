//Currying 

const suma = (a, b, c) => a + b + c;


const partial = a => b => c => suma(a, b, c); //retorna una función

// const primerNumero = partial(5); //retorna una función

// const segundoNumero = primerNumero(3, 5); //retorna una función

// console.log( segundoNumero ); //13

const resultado = partial(5)(3)(5); //retorna una función

console.log( resultado ); //13


console.log( suma( 1,2,3) ); //6