const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con id: ${id}`);
  },
  pausar: function (id) {
    console.log(`Pausando canción con id: ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando playlist con nombre: ${nombre}`);
  },
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist('propia');