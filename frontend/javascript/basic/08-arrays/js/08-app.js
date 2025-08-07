const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}
//Anterior forma
const nombreProducto = producto.nombre;
console.log(nombreProducto);

//Nueva forma Destructuring ECMAScript 
const { nombre, precio } = producto;

console.log(nombre);

// Destructuring coon Arrays

const numeros = [10, 20, 30, 40, 50, 60];

const [ , , tercero, , ,sexto] = numeros;  // A diferencia de los objetos aqui se pueden nombrar con cualquier nombre.
const [ primero, ...aSexto] = numeros;  

console.log( tercero );
console.log( sexto );

console.log( aSexto );