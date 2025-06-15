const { http } = require('../plugins');

const getPokemonById = async( id ) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  const pokemon = await http.get(url);
  // throw new Error('Error fetching Pokémon data');

  return pokemon.name;


}

module.exports =  getPokemonById;