 (() => {

  interface Xmen {
    name: string;
    realName: string;
    mutantPower( id: number ):string;
  }

  interface Human {
    age: Number;
  }

  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ){}

    mutantPower(id: number): string {
      return this.name + ' ' + this.realName;
    }

  }

  const logan = new Mutant(40, 'Wolverine', 'Logan');
  console.log(logan.mutantPower(1));


 })();


