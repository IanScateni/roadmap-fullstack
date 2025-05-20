import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.render('inicio');
});

router.get('/nosotros', (req, res) => {

  const nosotros = 'Viaje a alemania';

  res.render('nosotros', {
    nosotros
  });
});

export default router;