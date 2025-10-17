"use strict";
const printObject = (argument) => {
    console.log(argument);
};
function genericFunction(argument) {
    console.log(argument);
}
const genericFunctionArrow = (argument) => console.log(argument);
printObject('Imprime algo');
printObject(123214234);
genericFunction(new Date());
genericFunction(3.14);
genericFunctionArrow('hola');
