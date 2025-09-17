// WeakSet solo acepta objetos como valores y no son iterables
// No se pueden limpiar, solo eliminar valores individuales
// No tienen la propiedad size
const ws = new WeakSet();

const valor1 = { valor: 1 },
    valor2 = { valor: 2 },
    valor3 = { valor: 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);

// ws.delete(valor2);
// console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));