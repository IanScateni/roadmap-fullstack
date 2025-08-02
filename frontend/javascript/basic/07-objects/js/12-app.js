//Object literal
const medidas = {
  peso: "1kg",
  medida: "1m"
};


//Object constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto = new Producto('Monitor 24 pulgadas', 599);
console.log(producto);


