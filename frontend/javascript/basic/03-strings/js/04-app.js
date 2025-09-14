const producto = "              Monitor 20 pulgadas          ";

console.log(producto);
console.log(producto.length);
//eliminar del inicio
console.log(producto.trimStart());
//eliminar del final
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());
console.log(producto.trim());