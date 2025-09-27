(() => {

  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello, ${name}!`;
  const saveTheWorld = () => 'The world is saved!';


  let myFuntion: (a: number, b: number) => number;

  myFuntion = addNumbers;
  console.log(myFuntion(1, 2));
  
  // myFuntion = greet;
  // console.log(myFuntion('Ian'));

  // myFuntion = saveTheWorld;
  // console.log(myFuntion());



})();