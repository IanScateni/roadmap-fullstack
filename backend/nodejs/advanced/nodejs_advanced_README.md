# 🟩 Node.js – Advanced

This folder covers advanced backend programming with Node.js. It focuses on asynchronous behavior, streams, clustering, and performance optimization — key for building scalable applications.

## 🧠 Topics Covered

- `AsyncPatterns/`: Callbacks, Promises, async/await
- `Streams/`: Readable and writable streams, pipes, stream chaining
- `Buffer/`: Working with binary data in memory
- `EventsAdvanced/`: Custom event emitters, inheritance
- `Cluster/`: Running multi-core Node.js apps with built-in `cluster` module
- `Process/`: Child processes and system interactions
- `Performance/`: Benchmarking and performance profiling
- `ErrorHandling/`: Try/catch, error propagation, async errors
- `Debugging/`: Using `node inspect`, breakpoints, and DevTools

## 📁 Folder Structure Example

```
advanced/
├── AsyncPatterns/
│   ├── callbackExample.js
│   ├── promiseExample.js
│   └── asyncAwaitExample.js
├── Streams/
│   ├── readStream.js
│   └── pipeExample.js
├── Buffer/
│   └── bufferOps.js
├── Cluster/
│   └── clusterExample.js
├── EventsAdvanced/
│   └── customEmitter.js
├── Process/
│   └── childProcess.js
├── Performance/
│   └── benchmark.js
├── ErrorHandling/
│   └── tryCatchAsync.js
├── Debugging/
│   └── debugExample.js
└── README.md
```

## 🚀 How to Run

Each script can be executed with:

```bash
node path/to/example.js
```

Some examples may require running multiple terminals or using:

```bash
NODE_ENV=development node file.js
```

## 📌 Notes

This section goes beyond basics and prepares you for real-world backend challenges, including concurrency, memory management, and error-resilient code.

---

📄 Authored by **Ian Scateni** – Node.js advanced backend development in the `Architect Track`.