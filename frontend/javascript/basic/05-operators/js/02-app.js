const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


//dos numeros son iguales
console.log(numero1 == numero3);
console.log(numero1 == numero2); //Son iguales aunque uno es numero y otro es string

//Coomparador estricto
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);


// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
console.log(numero1 !== parseInt(numero2));