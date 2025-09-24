(() => {

  let avengers: any = 5;
  let exists;
  let power;  

  avengers = "Dr. Strange";
  console.log(avengers.charAt(0));  

  console.log( (avengers as string).charAt(0) );
  
  avengers = 155.232322342334;
  console.log(avengers.toFixed(2));
  console.log(( <number> avengers).toFixed(2));

})()