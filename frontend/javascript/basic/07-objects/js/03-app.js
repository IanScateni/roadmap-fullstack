const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}


// Agregar nuevas propiedades al oobjeto
producto.imagen = "imagen.png";

// borrar una llave
delete producto.disponible;

console.log(producto)