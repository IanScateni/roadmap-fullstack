//Maps son listas ordenadas de elementos que tienen un key y un value
const mapa = new Map();

mapa.set('nombre', 'Juan');
mapa.set('profesion', 'Desarrollador Web');
mapa.set('edad', 500);

console.log(mapa);
console.log(mapa.size);

//Obtener valores de un map
console.log(mapa.get('nombre'));

//Comprobar si existe un elemento en un map
console.log(mapa.has('edad')); //true
console.log(mapa.has('nacimiento')); //false

//Eliminar un elemento del map
mapa.delete('edad');
console.log(mapa);

//Iterar con un map
mapa.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//Otra forma de iterar con un map
for (let [key, value] of mapa) {
    console.log(`${key}: ${value}`);
}

//Convertir un objeto a un map 
const llaveValor = Object.entries({id: 1, titulo: 'Curso de JS Moderno'});
const mapa2 = new Map(llaveValor);
console.log(mapa2);

//Convertir un map a un objeto
const obj = Object.fromEntries(mapa2);
console.log(obj);
