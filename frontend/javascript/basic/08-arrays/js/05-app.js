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

carrito.unshift(producto3);

console.table(carrito);