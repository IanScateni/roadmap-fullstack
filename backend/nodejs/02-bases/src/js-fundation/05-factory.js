/* const { getAge, getUUID } = require( '../plugins' ); */

const buildMakePerson = ({ getUUID, getAge }) => {

  return ({ name, birthdate } ) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge( birthdate ),
    } 
  }

}

/* const obj = { name: 'John', birthdate: '1988-11-27' };

const jhon = buildPerson( obj );

console.log( jhon ); */

module.exports = {
  buildMakePerson,
}