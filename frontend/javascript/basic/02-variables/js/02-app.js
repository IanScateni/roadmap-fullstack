let ratio = 80;
//Reasignar el valor
ratio = 'doscientos';
ratio = true;

console.log(ratio);
alert('Diferencias entre var y let es el scope(alcance)');


let precio;

precio = 300;

console.log(precio);

// Ejemplo de Scope

if (true) {
  var mensaje = "Hola con var";
  let saludo = "Hola con let";
}

console.log(mensaje); // ✅ "Hola con var"
console.log(saludo);  // ❌ ReferenceError: saludo is not defined

//Zona muerta temporal (TDZ)

console.log(nombre); // ❌ ReferenceError
let nombre = "Ian";

//Con var, esto mostraría undefined, pero con let, no puedes acceder a la variable antes de su declaración.