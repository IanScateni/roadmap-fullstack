(() => {

  type Avenger = {
    name: string,
    weapon: string
  }

  const ironman: Avenger = {
    name: 'IronMan',
    weapon: 'Armorsuit'
  }

  const captanAmerica: Avenger = {
    name: 'Capitán América',
    weapon: 'Shield'
  }
  
  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const avengers: Avenger[] = [ ironman, thor, captanAmerica];

  for (const avenger of avengers) {
    console.log(avenger)
  }

})();