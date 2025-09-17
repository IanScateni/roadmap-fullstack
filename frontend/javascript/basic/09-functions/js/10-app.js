const aprendiendo = (tecnologia = "JavaScript") => console.log(`Aprendiendo ${tecnologia}`);
const aprendiendo2 = (tecnologia = "JavaScript") => `Aprendiendo ${tecnologia}`;

aprendiendo("React");
aprendiendo(); // Aprendiendo JavaScript  
console.log(aprendiendo2("Angular")); 