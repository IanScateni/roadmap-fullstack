const buildPerson = ( { name, birthdate } ) => {
  
  return {
    id: new Date().getTime(),
    name,
    birthdate,
    age: new Date().getFullYear() - new Date( birthdate ).getFullYear(),
  }
  
}

const obj = { name: 'John', birthdate: '1988-11-27' };

const jhon = buildPerson( obj );

console.log( jhon );