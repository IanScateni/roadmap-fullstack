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
// Prevenir modificación
Object.freeze( producto );

// producto.disponible = false;
// producto.imagen = "imagen.png";

console.log(producto);

//Verificar si esta freeze
console.log(Object.isFrozen( producto ));