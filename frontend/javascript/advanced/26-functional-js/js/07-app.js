const obtenerCliente = () => () => console.log('Juan');

const fn = obtenerCliente();

fn(); // Juan

