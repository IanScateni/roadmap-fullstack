"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return '🌍 Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        ConquistarMundo() {
            return '💀 Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.ConquistarMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    // printName ( magneto );
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name}(${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Captain', 'Scott Lang');
    // console.log( antman );
    // console.log( antman.bio() );
    // console.log( Avenger.getAvgAge() );
    // console.log( Avenger.avgAge );
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor Avenger llamado!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen();
    // wolverine.fullName = 'Maximo';
    // console.log( wolverine.fullName );
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único')
    console.log(apocalipsis1);
})();
//# sourceMappingURL=main.js.map