(() => {

  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  const { poder, vision } = avengers;


  // console.log(poder, vision);

  const avengersArr: [string, boolean, number] = ['Cap. America', true, 1];

  const [capitan, iron, number] = avengersArr;

  // console.log({iron, number, capitan})


})();