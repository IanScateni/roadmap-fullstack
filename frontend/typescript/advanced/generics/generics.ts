
const printObject = ( argument: any ) => {

  console.log( argument );

}

function genericFunction<T>( argument: T ) {

  console.log(argument);

}

const genericFunctionArrow = <T>( argument: T) => console.log(argument);

printObject('Imprime algo');
printObject(123214234);

genericFunction( new Date() );
genericFunction(3.14);

genericFunctionArrow('hola');