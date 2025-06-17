//const { emailTemplate } = require('./js-fundation/01-template');
//require('./js-fundation/02-destructuring');
//const { getUserById } = require('./js-fundation/04-arrow');
const { getUUID, getAge } = require('./plugins');
// const { buildMakePerson } = require('./js-fundation/05-factory');
const getPokemon = require('./js-fundation/06-promises');
const { buildLogger } = require('./plugins');


const logger = buildLogger('app');

logger.log('Hola mundo!');

logger.error('Esto es un error!');


getPokemon(2)
  .then( ( pokemon ) => console.log({ pokemon }) )
  .catch( ( error ) => console.error('Error:', error) )
  .finally( () => console.log('Finished fetching Pokémon') );

  // ! Referencia a la función factory
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: '1988-11-27' };
// const jhon = makePerson( obj );
// console.log( jhon );

