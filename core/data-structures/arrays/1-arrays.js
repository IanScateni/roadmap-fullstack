// Ejercicio 1: Listas / Arrays

// Enunciado:
// Dado un array de números [10,20,30];
// 1. Agrega el número 40 al final.
// 2. Elimina el último elemento y guardalo en una variable.
// 3. Comprueba si el array contiene el valor 20.
// 4. Obten la longitud final del array


// Resultado esperado:
// - 1 = [10, 20, 30, 40]
// - 2 = 40, arr = [10, 20, 30]
// - 3 = true
// - 4 = 3


// Resolver: 
// 0. Creamos el array
let aNumeros = [10, 20, 30];
console.log(aNumeros);

// 1. Agrega 40
aNumeros.push(40);
console.log(aNumeros);

// 2. Elimina último y guarda en 'last'
const last = aNumeros[3];
console.log(last);
aNumeros.pop();
console.log(aNumeros);

// 3. Verificar existencia de 20
console.log(aNumeros.includes(20));


// 4. Obtener longitud en 'length'

console.log(aNumeros.length);