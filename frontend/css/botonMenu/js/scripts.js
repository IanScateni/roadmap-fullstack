const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
const h1 = document.querySelector('.inner-header h1');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if ( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Mostrar Footer';
        h1.textContent = 'Mostrar Footer';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar Footer';
        h1.textContent = 'Ocultar Footer';
    }
}