# 🌍 Travel Agency

Sitio web simulado para una agencia de viajes, desarrollado como proyecto educativo usando Node.js, Express y Pug. Esta aplicación es parte del proceso de aprendizaje del stack backend moderno con enfoque en arquitectura MVC.

---

## 📌 Descripción

**Travel Agency** es una aplicación web que presenta una agencia de viajes ficticia. Incluye páginas de inicio, testimonios de clientes y diseño modular para permitir crecimiento futuro. Su desarrollo tiene como objetivo practicar:

- Node.js y Express desde cero
- Uso del motor de plantillas **Pug**
- Patrón de arquitectura **MVC**
- Ruteo limpio y controladores desacoplados
- Servir archivos estáticos y vistas dinámicas

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **Pug** (Template Engine)
- **Sequelize** (ORM)
- **MySQL** (Base de datos local)
- **dotenv**
- **Nodemon** (desarrollo en caliente)
- HTML/CSS básico para estilos

---

## 📁 Estructura del Proyecto

```
travel-agency/
├── app.js
├── config/
│   └── db.js
├── controllers/
├── models/
├── routes/
├── views/
├── public/
│   ├── css/
│   └── img/
├── .env.example
└── README.md
```

---

## 🚀 Instalación y uso

1. Clona o descarga este repositorio.
2. Instala dependencias:

```bash
npm install
```

3. Crea el archivo `.env` a partir del ejemplo:

```bash
cp .env.example .env
```

4. Ejecuta el servidor en modo desarrollo:

```bash
npm run dev
```

5. Abre tu navegador en:

```
http://localhost:3000/
```

---

## 🔐 Variables de Entorno

Antes de ejecutar la aplicación, asegúrate de crear un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example`. Este archivo contiene las variables necesarias para conectar a la base de datos.

```env
DB_NAME=travelAgency
DB_USER=root
DB_PASS=
DB_HOST=127.0.0.1
```

---

## 🧪 Base de Datos

Si deseas probar la aplicación de forma completa, asegúrate de tener MySQL instalado localmente y crear la base de datos con el nombre indicado en `.env` (`travelAgency`). Puedes usar herramientas como **phpMyAdmin**, **DBeaver**, o ejecutar:

```sql
CREATE DATABASE travelAgency;
```

Sequelize se encargará de sincronizar las tablas automáticamente al iniciar la app.

## 🌱 Cargar datos de prueba (seed)

Para poblar la base de datos con información de ejemplo (viajes y testimoniales), ejecuta el siguiente comando:

```bash
node seed.js


## 📄 Licencia

Este proyecto es de uso educativo y personal. Puedes reutilizar la estructura o código como base para tus propios proyectos de práctica o portafolio.

---

## ✍️ Autor

Desarrollado por **Ian Scateni** como parte del roadmap de backend con Node.js / express / pug.
