"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m"
    },
    fabricacion: {
      pais: "China"
    }
  }
}

//Object methods

//Seal permite modificar pero no agregar una nueva propiedad
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.png";

console.log(producto);

console.log(Object.isSealed(producto));









