(() => {

  type Hero = {
    name:string;
    age?: number; 
    powers: string[];
    getName?: () => string;
  }


  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['velocidad', 'fuerza']
  }

  let superman: Hero = {
    name: 'Clan Kent',
    age: 60,
    powers: ['Súper fuerza'],
    getName() {
      return this.name;
    }
  }

  console.log(flash);
  console.log(superman);

})();