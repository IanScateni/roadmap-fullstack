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

const producto3 = {
  nombre: "Teclado",
  precio: 100
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto3];
resultado = [producto2, ...resultado];

console.table(resultado);
