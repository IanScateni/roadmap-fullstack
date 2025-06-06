import express from "express";
import { 
  paginaInicio, 
  paginaNosotros, 
  paginatestimoniales, 
  paginaViajes, 
  paginaDetalleViaje 
} from "../controllers/paginasController.js";
import {
  guardarTestimonial
} from "../controllers/testimonialController.js"

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginatestimoniales);

router.post('/testimoniales', guardarTestimonial);

export default router;