const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 50 },
  { nombre: 'Televisión 50 pulgadas', precio: 700 },
  { nombre: 'Tablet', precio: 300 },
];


//Array methods
carrito.forEach( function(producto) {

  console.log( producto.nombre );
  console.log( producto.precio );

});

carrito.map( function(producto) {

  console.log( producto.nombre );
  console.log( producto.precio );

});

const nuevoArray = carrito.map( function(producto) {

  return( producto.nombre );

});

console.log(nuevoArray);

