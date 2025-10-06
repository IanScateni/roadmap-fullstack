(() => {

  class Avenger {

    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string, 
      private team: string, 
      private realName?: string
    ) {}

    bio() {
      return `${ this.name }(${ this.team })`
    }


  }

  const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');

  // console.log( antman );
  // console.log( antman.bio() );
  // console.log( Avenger.getAvgAge() );
  // console.log( Avenger.avgAge );


})();