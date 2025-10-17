import axios from 'axios';
const getPokemon = async (pokemonId) => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        console.log(`✅ ${data.name} (id: ${data.id})`);
    }
    catch (error) {
        console.error('❌ Error fetching Pokémon:', error.message);
    }
    finally {
        console.log('Fin de getPokemon');
    }
};
getPokemon(25);
//# sourceMappingURL=get-pokemon.js.map