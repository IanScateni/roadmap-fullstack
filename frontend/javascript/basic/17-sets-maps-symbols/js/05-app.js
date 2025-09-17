//Symbols permiten crear una propiedad unica en un objeto
const sym1 = Symbol('a');
const sym2 = Symbol('a');

console.log(sym1 === sym2); //false

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido al objeto persona
persona[nombre] = 'Juan';
persona[apellido] = 'Perez';
persona.edad = 30;

console.log(persona);
console.log(persona[nombre]);

//No se puede iterar con forEach, for of, etc
for(let i in persona) {
    console.log(i); //edad
}

//Definir una descripcion para el simbolo
const sym3 = Symbol('descripcion del simbolo');
console.log(sym3); //Symbol(descripcion del simbolo)

//Symbols globales
const sym4 = Symbol.for('creado en el registro global');
const sym5 = Symbol.for('creado en el registro global');

console.log(sym4 === sym5); //true

console.log(Symbol.keyFor(sym4)); //creado en el registro global

//Symbols nativos
const arr = [1,2,3,4];
console.log(arr);
console.log(arr[Symbol.iterator]()); //Array Iterator {}

const it = arr[Symbol.iterator]();

console.log(it.next()); //{value: 1, done: false}
console.log(it.next()); //{value: 2, done: false}
console.log(it.next()); //{value: 3, done: false}
console.log(it.next()); //{value: 4, done: false}
console.log(it.next()); //{value: undefined, done: true}

//Podemos crear nuestros propios iteradores
const iterable = {
    items: [],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                if(i < this.items.length) {
                    return {value: this.items[i++], done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

iterable.items.push(1);
iterable.items.push(2);
iterable.items.push(3);
iterable.items.push(4);
iterable.items.push(5);

for(let item of iterable) {
    console.log(item); //1,2,3,4,5
}

//Generadores
function* generaId() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

const gen = generaId();

console.log(gen.next().value); //0
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
console.log(gen.next().value); //4
console.log(gen.next().value); //5
console.log(gen.next().value); //6
console.log(gen.next().value); //7
console.log(gen.next().value); //8
console.log(gen.next().value); //9