(() => {

  const abc = (message: string):never  => {

    throw new Error(message);
  
  } 
  
  abc('help me');
  console.log('after');

})();