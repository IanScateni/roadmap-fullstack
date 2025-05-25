import { Viaje } from '../models/Viajes.js'

const paginaInicio = (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio'
  });
};

const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Nosotros'
  });
};

const paginaViajes = async (req, res) => {
  //Consultar bd
  const viajes = await Viaje.findAll();

  res.render('viajes', {
    pagina: 'Próximos viajes',
    viajes,
  });
};
const paginatestimoniales = (req, res) => {
  res.render('testimoniales', {
    pagina: 'Testimoniales'
  });
};
// Muestra un viaje por slug
const paginaDetalleViaje = (req, res) => {
  
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginatestimoniales,
  paginaDetalleViaje
}