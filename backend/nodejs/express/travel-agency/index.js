import express from 'express';
import router from "./routes/index.js";
import db from './config/db.js';

const app = express();

//Conectar  la base de datos
db.authenticate()
  .then( () => console.log('Base de edatos conectada'))
  .catch( error => console.log(error));

const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
  const year = new  Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.name = "Agencia de viajes";
  next();
});

// Definir la carpeta publica
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})


