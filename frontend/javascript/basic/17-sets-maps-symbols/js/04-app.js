//WeakMap sirven para guardar datos privados en los objetos
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

const datosCliente = new WeakMap();
datosCliente.set(cliente, {tipo: 'Premium'});

console.log(datosCliente.get(cliente));
console.log(datosCliente.has(cliente));

datosCliente.delete(cliente);
console.log(datosCliente.has(cliente));

//No se puede iterar ni limpiar un WeakMap
//No se puede usar un objeto primitivo como llave
//No tiene la propiedad size      