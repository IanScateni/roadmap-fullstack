"use strict";
var _a;
const heroes = [
    {
        id: 1,
        name: "Superman",
        power: "Super strength"
    },
    {
        id: 2,
        name: "Batman",
        power: "Intelligence"
    },
    {
        id: 3,
        name: "Wonder Woman",
        power: "Combat skills"
    },
];
const findHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
const hero = findHeroById(1);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'No hero found');
