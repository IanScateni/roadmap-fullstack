const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 50 },
  { nombre: 'Televisión 50 pulgadas', precio: 700 },
  { nombre: 'Tablet', precio: 300 },
];

for ( let i = 0; i < carrito.length; i++ ) {

  console.log( carrito[i].nombre );  

}


//Array methods
carrito.forEach( function(producto) {

  console.log( producto.nombre );
  console.log( producto.precio );

});

carrito.forEach( producto => console.log( producto.nombre ) );
carrito.forEach( producto => console.log( producto.precio ) );