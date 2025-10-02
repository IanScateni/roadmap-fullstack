

// console.log( process.env );


const { SHELL, HOMEBREW_PREFIX } = process.env;


console.table({SHELL, HOMEBREW_PREFIX});

const characters = ['Flash', 'SuperMan'];

const [,SuperMan] = characters;