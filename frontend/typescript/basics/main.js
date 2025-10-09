"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'fuerza']
    };
    let superman = {
        name: 'Clan Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    console.log(superman);
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
    const logan = new Mutant(40, 'Wolverine', 'Logan');
    console.log(logan.mutantPower(1));
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map