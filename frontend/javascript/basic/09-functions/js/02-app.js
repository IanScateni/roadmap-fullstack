// Declaración de la función
sumar (2, 3);
function sumar(n1, n2) {

    console.log(n1 + n2);

}




// Expresión de la función
const sumar2 = function(n1, n2) {
  console.log(n1 + n2);
}
sumar2 (3, 3);  


// la diferencia entre declaración y expresión es que la declaración se puede invocar antes de ser declarada, y la expresión no.
// pasa por que las funciones declaradas se cargan en memoria al inicio, y las expresadas no. hoisting se llama esto.


