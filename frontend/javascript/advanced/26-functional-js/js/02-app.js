const suma = (a, b) => a + b;
const multiplicacion = (a, b) => a * b;

const sumnarOMultiplicar = fn => fn(10, 20);

console.log(sumnarOMultiplicar(suma));
console.log(sumnarOMultiplicar(multiplicacion));