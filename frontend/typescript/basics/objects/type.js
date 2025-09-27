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
//# sourceMappingURL=type.js.map