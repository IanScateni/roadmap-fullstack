const carrito = [];

//Definir un producto
const producto = {
  nombre: "Monitor",
  precio: 400
}
const producto2 = {
  nombre: "Celular",
  precio: 1400
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 100
}
const producto4 = {
  nombre: "Teclado",
  precio: 200
}

carrito.push(producto4);

carrito.unshift(producto3);

console.table(carrito);


// Eliminar último elemento
carrito.pop();
console.table(carrito);

//Eliminar al inicio del arreglo
carrito.shift();
console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);