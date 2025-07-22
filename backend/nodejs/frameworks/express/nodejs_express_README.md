# 🟩 Node.js – Express.js Framework

This folder contains hands-on projects and experiments using **Express.js**, a minimal and flexible Node.js web application framework.

## 🎯 What You'll Learn

- Creating routes and handling HTTP methods
- Using middleware (built-in, third-party, and custom)
- REST API structure and MVC pattern
- Error handling and request validation
- Environment management with `dotenv`
- Serving static files
- Integrating with MongoDB, PostgreSQL, or MySQL

## 📁 Folder Structure Example

```
express/
├── hello-express/              # Basic Express app with routes
├── crud-api/                   # REST API with controllers and DB
├── auth-api/                   # JWT and session-based authentication
├── static-server/              # Serving HTML/CSS/JS with Express
└── README.md
```

Each subproject contains:

- `app.js` or `server.js`
- `routes/`, `controllers/`, `middlewares/` folders
- `package.json`
- `.env.example`
- `README.md` for setup instructions

## 🚀 How to Run

```bash
npm install
npm run dev
```

Access the API at:

```
http://localhost:3000/
```

## 🔧 Tools & Packages

- `express`
- `cors`, `dotenv`, `morgan`
- `jsonwebtoken`, `bcryptjs`
- `mongoose`, `sequelize`, or `pg`

## 📌 Notes

This folder serves as the gateway to building robust RESTful services before advancing into NestJS or full architectural patterns.

---

📄 Created by **Ian Scateni** – Express.js backend training in the `Architect Track`.