
iniciarAPP();

function iniciarAPP() {
  console.log("Iniciando App...");

  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda función");
  usuarioAutenticado('pepe', '1234');
}


function usuarioAutenticado(usuario, password) {
  console.log("Autenticando usuario...");
  console.log(`Usuario: ${usuario}, Password: ${password}`);
}

