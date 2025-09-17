// Un set permite crear una lista de valores únicos ( que no se repiten )
const carrito = new Set();

carrito.add('Camisa');
carrito.add('Camisa');// Este no se agregaria
carrito.add('Pantalón');

carrito.has('Camisa'); // true

// console.log(carrito);

carrito.forEach( (producto, index) => {
  console.log(producto);
  // console.log(index);
});

carrito.delete('Camisa'); // Elimina la camisa
// cuanto mide un array 
console.log(carrito.size);

carrito.clear(); // Elimina todo el set
console.log(carrito);


// Del siguiente arrreglo eliminar los duplicados
const numeros = [10,20,30,40,50,60,70,80,90,100,10,20,30,40,50];
const noDuplicados = new Set(numeros); // muestra los valores únicos
console.log(noDuplicados);

