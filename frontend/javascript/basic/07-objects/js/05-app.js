const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    peso: "1kg",
    medida: "1m"
  },
  fabricacion: {
    pais: "China"
  }
}

console.log(producto.informacion.medida);