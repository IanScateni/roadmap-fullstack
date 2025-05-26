import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.name = "Agencia de viajes";
  next();
});

// Body parser
app.use(express.urlencoded({ extended: true }));

// Carpeta pública
app.use(express.static('public'));

// Rutas
app.use('/', router);

// Conexión y sincronización con la base de datos + iniciar servidor
const port = process.env.PORT || 3000;

(async () => {
  try {
    await db.authenticate();
    console.log('📡 Conexión exitosa a la base de datos');

    await db.sync();
    console.log('🧱 Base de datos sincronizada');

    app.listen(port, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
})();