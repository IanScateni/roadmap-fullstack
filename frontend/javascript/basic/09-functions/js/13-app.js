const reproductor = {
  cancion: '',
  reproducir: id => console.log(`Reproduciendo canción con id: ${id}`),
  pausar: id => console.log(`Pausando canción con id: ${id}`),
  crearPlaylist: nombre => console.log(`Creando playlist con nombre: ${nombre}`),

  set nuevacion(cancion) {  
    this.cancion = cancion;
    console.log(`Añadiendo canción: ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`)    
  }

}

reproductor.nuevacion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar(45);
reproductor.crearPlaylist('propia');