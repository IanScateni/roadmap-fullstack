(() => {

  class Avenger {

    constructor(
      public name: string,
      public realName: string
    ){
      // console.log('Constructor Avenger llamado!');
    }

    protected getFullName() {
      return `${ this.name } ${ this.realName }`
    }

  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant:boolean
    ){
      super( name, realName )
    }

    get fullName() {
      return `${ this.name } - ${ this.realName }`;
    }

    set fullName( name: string ) {
      this.name = name;
    }

    getFullNameDesdeXmen() {
      console.log( super.getFullName() )
    }

  }

  const wolverine = new Xmen('Wolverine', 'Logan', true );

  // console.log(wolverine);

  // wolverine.getFullNameDesdeXmen();

  // wolverine.fullName = 'Maximo';
  
  // console.log( wolverine.fullName );

})();