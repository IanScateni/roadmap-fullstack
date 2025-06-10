# 🧩 API REST - Práctica Full Stack Developer

Este proyecto es una **práctica de desarrollo backend** enfocada en el aprendizaje de Node.js y la creación de APIs RESTful como parte de mi **roadmap para convertirme en desarrollador full stack**.

## 🎯 Objetivo

Desarrollar una API REST desde cero utilizando Node.js y Express, que servirá como base para el backend. Esta API será reutilizable en el futuro para integrarse con un frontend web y una app móvil (React Native), completando así el stack completo de desarrollo.

## 🚀 Tecnologías utilizadas

- **Node.js** – Entorno de ejecución para JavaScript en el servidor.
- **Express.js** – Framework para construir APIs REST de manera rápida y sencilla.
- **Dotenv** – Manejo de variables de entorno.
- **Nodemon** – Recarga automática en desarrollo.

## 📁 Estructura del proyecto

```
apirest/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── config/
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 📦 Instalación

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno en un archivo `.env`:
```
PORT=3000
```

4. Inicia el servidor en modo desarrollo:
```bash
npm run dev
```

---

## 🧠 Aprendizajes clave

- Estructura de un proyecto backend profesional.
- Diseño de rutas, controladores y servicios.
- Uso de middlewares y gestión de errores.
- Preparación para integrar autenticación JWT y conexión a base de datos.
- Base sólida para conectar frontend React y futura app móvil con React Native.

---

## 👨‍💻 Autor

Proyecto desarrollado por **Ian Scateni** como parte del roadmap de desarrollo **Full Stack Web & Mobile**.

---

## 📺 Tutorial base

Este proyecto sigue el curso en YouTube:

**[Aprende Node.js desde CERO y Crea tu Primera API REST](https://www.youtube.com/watch?v=...)**  
Autor: John Serrano

---

### 📌 Etapas siguientes en el roadmap

- [ ] Integrar base de datos (PostgreSQL o MongoDB)
- [ ] Añadir autenticación con JWT
- [ ] Crear frontend en React
- [ ] Conectar app móvil en React Native
- [ ] Publicar API en la nube (Render, Railway, Vercel backend)