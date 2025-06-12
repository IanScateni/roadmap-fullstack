console.log( process.env );


const { SHELL, HOMEBREW_PREFIX } = process.env;


//console.table({SHELL, HOMEBREW_PREFIX});

const character = ['Batman', 'Bruce Wayne', 30, 'Gotham City'];

const [ ,bruce,,city] = character;

//console.log(city)