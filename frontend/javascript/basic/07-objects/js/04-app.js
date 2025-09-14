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
console.log(precio);

