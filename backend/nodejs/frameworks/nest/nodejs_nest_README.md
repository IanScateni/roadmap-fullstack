# 🟩 Node.js – NestJS Framework

This folder contains examples and practice projects using **NestJS**, a progressive Node.js framework built with TypeScript that enables scalable and maintainable server-side applications.

## 🎯 What You'll Learn

- Modular architecture with controllers, services, and modules
- REST API development using `@Controller` and `@Get`/`@Post`
- Dependency Injection using providers
- Environment-based configuration
- Middleware, Pipes, Guards, and Interceptors
- Integration with PostgreSQL and TypeORM or Prisma
- Clean Architecture and scalable folder structure

## 📁 Folder Structure Example

```
nest/
├── hello-nest/                 # Minimal NestJS starter project
├── crud-api/                   # Resource module with controller/service
├── auth-system/                # JWT-based authentication with guards
├── clean-architecture-api/     # Clean architecture applied in NestJS
└── README.md
```

Each subproject includes:

- `main.ts`, `app.module.ts`
- `src/` folder with modules, controllers, and services
- `.env` and `config/`
- `README.md` with setup instructions

## 🚀 How to Run

Use the Nest CLI or npm scripts:

```bash
npm install
npm run start:dev
```

Or using Nest CLI globally:

```bash
nest start --watch
```

## 🔧 Tools & Packages

- `@nestjs/core`, `@nestjs/common`, `@nestjs/config`
- `class-validator`, `class-transformer`
- `@nestjs/jwt`, `passport-jwt`
- `typeorm` or `prisma` for DB integration

## 📌 Notes

NestJS is ideal for implementing architectural patterns like Clean Architecture, Hexagonal Architecture, or DDD. This section is key for your evolution into enterprise-level backends.

---

📄 Developed and maintained by **Ian Scateni** – NestJS backend architecture for the `Architect Track`.