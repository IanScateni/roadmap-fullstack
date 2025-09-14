# 🟩 Node.js – Basic

This folder contains foundational concepts and syntax for working with **Node.js**, focusing on core modules, runtime basics, and JavaScript in a server-side environment.

## 🧠 Topics Covered

- `HelloWorld.js`: Your first Node app using `console.log`
- `Variables.js`: `const`, `let`, `var` and scope
- `Functions.js`: Traditional and arrow functions
- `Modules/`: `require`, `module.exports`, CommonJS basics
- `FileSystem/`: Reading and writing files with `fs`
- `PathModule.js`: Using the `path` module to manage file paths
- `Events/`: EventEmitter basics
- `Process/`: Accessing environment variables and arguments
- `HTTP/`: Creating basic HTTP servers without Express
- `PackageJson/`: Initializing and understanding `package.json`
- `npm/`: Installing, using and creating packages

## 🧪 Folder Structure Example

```
basic/
├── HelloWorld.js
├── Variables.js
├── Functions.js
├── PathModule.js
├── Modules/
│   ├── math.js
│   └── app.js
├── FileSystem/
│   ├── readFile.js
│   └── writeFile.js
├── Events/
│   └── emitter.js
├── Process/
│   └── envExample.js
├── HTTP/
│   └── basicServer.js
├── PackageJson/
│   ├── package.json
│   └── example.js
└── README.md
```

## 🚀 How to Run

Use Node.js directly from the terminal:

```bash
node filename.js
```

If using packages, make sure to run:

```bash
npm install
```

## 📌 Notes

This section prepares you to understand the JavaScript runtime, I/O operations, and how modules are structured in Node.js. It’s the foundation for moving on to frameworks like Express and NestJS.

---

📄 Authored by **Ian Scateni** – Node.js backend foundations for the `Architect Track`.