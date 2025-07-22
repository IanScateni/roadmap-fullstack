# 🟩 Node.js – TypeScript

This folder contains TypeScript practice and examples specifically applied in a **Node.js backend environment**. TypeScript provides strong typing, better tooling, and scalable structure for backend projects.

## 🎯 Goals

- Learn TypeScript syntax and typing system
- Understand how to configure and run TypeScript in Node.js
- Apply TypeScript to controllers, services, and modules
- Prepare for advanced architectures using NestJS and Clean Architecture

## 🧠 Topics Covered

- Type annotations, interfaces, and enums
- Type narrowing and union types
- Classes and access modifiers
- Async/await with typed promises
- DTOs and strong typing in APIs
- Project structure with `tsconfig.json`
- `ts-node`, `nodemon`, and runtime tools
- Modularization and clean code with TS

## 📁 Folder Structure Example

```
typescript/
├── basic/
│   ├── variables.ts
│   ├── functions.ts
│   ├── interfaces.ts
│   └── enums.ts
├── advanced/
│   ├── generics.ts
│   ├── decorators.ts
│   ├── class-implementation.ts
│   └── ts-async.ts
├── tsconfig.json
└── README.md
```

## 🚀 How to Run

Use `ts-node` or `tsc` for execution:

```bash
npx ts-node path/to/file.ts
```

Or compile to JS:

```bash
tsc && node dist/index.js
```

## 🔧 Tools

- `typescript`
- `ts-node`, `nodemon`
- `eslint`, `prettier`
- `@types/node`

## 📌 Notes

This section is essential for transitioning from vanilla JavaScript to scalable, enterprise-level code. The skills here directly feed into your NestJS, architecture, and testing journey.

---

📄 Created by **Ian Scateni** – TypeScript backend mastery in the `Architect Track`.