
const getPokemonById = ( id ) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  return fetch( url )
    .then( ( response ) => response.json())
    // .then( ( ) =>  { throw new Error('Pokémon no existe'); } )
    .then( ( pokemon ) =>  pokemon.name);
}

module.exports =  getPokemonById;