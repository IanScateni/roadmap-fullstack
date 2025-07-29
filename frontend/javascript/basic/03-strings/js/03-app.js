const producto = "Monitor 20 pulgadas ";
const precio = '30 USD';

//concatenar
console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));

console.log( producto + "con un precio de " + precio);

console.log("El producto " + producto + "tiene un precio de " + precio);

console.log("El producto ", producto , "tiene un precio de ", precio);

//Template string
console.log(`El producto ${producto} tiene un precio de $${precio}`);