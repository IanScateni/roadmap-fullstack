// Existen muy pocas diferencias entre left y const, las reglas de left aplican a const  
//Siempre se deben inicializar con un valor
//const precio; esto da error
const valor = 20;

console.log(valor);
//const no puede ser reasignado

const tipo = 'Tablet';
tipo = 'Monitor';

console.log(tipo); // devolvera  TypeError: invalid assignment to const 'tipo'


