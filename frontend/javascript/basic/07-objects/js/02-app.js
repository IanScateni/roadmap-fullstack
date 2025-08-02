const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  imagen: "imagen.png"
}

console.log(producto);

//Los objetos tienen sintaxis de punto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//se puede tambien de esta forma pero no es muy comun
console.log(producto['nombre']);
