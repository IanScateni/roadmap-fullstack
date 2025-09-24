// Spread Operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const meses2 = ['Junio', 'Julio', 'Agosto'];

// Unir dos arrays
const meses3 = [...meses, ...meses2];
console.log(meses3);

// Añadir elementos a un array
const meses4 = [...meses, 'Junio'];
console.log(meses4);

// Copiar un array
const meses5 = [...meses];
console.log(meses5);

// Array Methods
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// forEach
carrito.forEach( producto => console.log(producto.nombre) );

// map
const nuevoArray = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}` );
console.log(nuevoArray);

// filter
const filtrado = carrito.filter( producto => producto.precio > 400 );
console.log(filtrado);

const filtrado2 = carrito.filter( producto => producto.nombre !== 'Celular' );
console.log(filtrado2);

// find
const encontrado = carrito.find( producto => producto.nombre === 'Tablet' );
console.log(encontrado);

// reduce
const total = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(total);

// some
const existe = carrito.some( producto => producto.nombre === 'Celular' );
console.log(existe);

// every
const todos = carrito.every( producto => producto.precio < 1000 );
console.log(todos);