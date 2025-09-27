(() => {
  // Functions

  const hero: string = "Flash";
  function returnName(): string {
    return hero;
  }

  const activateBatSignal = (): string => {  
    return "Bat signal activated!";
  }

  console.log(typeof activateBatSignal);
  
  const heroName = returnName();

})();