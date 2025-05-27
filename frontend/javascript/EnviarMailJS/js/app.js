const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    btnReset.addEventListener('click', resetearFormulario);

    formulario.addEventListener('submit', enviarEmail);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    if (e.target.value.length > 0) {

        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {

        if ( er.test( e.target.value ) ) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
        }
    }

    if (  er.test( email.value ) && asunto.value !== '' && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

function enviarEmail(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        formulario.insertBefore(parrafo, spinner);
        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 4000);
    }, 3000);
}

function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}