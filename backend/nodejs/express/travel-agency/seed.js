import db from './config/db.js';
import { Viaje } from './models/Viajes.js';
import { Testimonial } from './models/Testimoniales.js';

(async () => {
  try {
    await db.authenticate();
    console.log('📡 Conexión exitosa a la base de datos');

    await db.sync({ force: true });
    console.log('🧱 Tablas creadas nuevamente');

    await Viaje.bulkCreate([
      {
        titulo: 'Italia',
        precio: 50000,
        fecha_ida: '2023-06-24',
        fecha_vuelta: '2023-06-30',
        imagen: 'roma',
        descripcion: 'Praesent tincidunt ante at justo semper volutpat...',
        disponibles: 32,
        slug: 'viaje-italia'
      },
      {
        titulo: 'Canada',
        precio: 60000,
        fecha_ida: '2023-07-19',
        fecha_vuelta: '2023-07-19',
        imagen: 'canada',
        descripcion: 'Praesent tincidunt ante at justo semper volutpat...',
        disponibles: 25,
        slug: 'viaje-canada'
      },
      {
        titulo: 'Grecia',
        precio: 40000,
        fecha_ida: '2023-09-06',
        fecha_vuelta: '2023-09-15',
        imagen: 'grecia',
        descripcion: 'Praesent tincidunt ante at justo semper volutpat...',
        disponibles: 18,
        slug: 'viaje-grecia'
      },
      {
        titulo: 'Inglaterra',
        precio: 8000,
        fecha_ida: '2023-09-22',
        fecha_vuelta: '2023-10-03',
        imagen: 'londres',
        descripcion: 'Praesent tincidunt ante at justo semper volutpat...',
        disponibles: 22,
        slug: 'viaje-inglaterra'
      },
      {
        titulo: 'Rio de Janeiro',
        precio: 50000,
        fecha_ida: '2023-04-16',
        fecha_vuelta: '2023-04-25',
        imagen: 'rio',
        descripcion: 'Praesent tincidunt ante at justo semper volutpat...',
        disponibles: 23,
        slug: 'viaje-rio-de-janeiro'
      },
      {
        titulo: 'Francia',
        precio: 75000,
        fecha_ida: '2023-04-03',
        fecha_vuelta: '2023-04-10',
        imagen: 'paris',
        descripcion: 'Praesent tincidunt ante at justo semper volutpat...',
        disponibles: 14,
        slug: 'viaje-francia'
      }
    ]);

    await Testimonial.bulkCreate([
      {
        nombre: 'Juan',
        correo: 'correo@correo.com',
        mensaje: 'Las mejores vacaciones!'
      },
      {
        nombre: 'Pedro',
        correo: 'pedro@pedro.com',
        mensaje: 'Muy buena agencia y atención'
      },
      {
        nombre: 'Uno Nuevo',
        correo: 'correo@correo.com',
        mensaje: 'Muy buenas vacaciones'
      },
      {
        nombre: 'Juan',
        correo: 'correo@correo.com',
        mensaje: 'Probando este formulario'
      }
    ]);

    console.log('🌱 Datos de prueba insertados');
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar datos:', error);
    process.exit(1);
  }
})();
