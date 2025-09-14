const producto = "Monitor 20 pulgadas";

// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); // aqui no hace nada

// Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2, 1)); // aquí substring se invierte (1, 2) esta es la diferencia con slice.

const usuario = 'Ian';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));

