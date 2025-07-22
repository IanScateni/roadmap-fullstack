# 📘 Java – Advanced

This folder contains more advanced Java concepts that go beyond syntax. These topics are essential for building scalable, maintainable, and modular backend applications using object-oriented programming and architectural principles.

## 🧠 Topics Covered

- `OOP/`: Classes, objects, instance variables, and methods
- `Encapsulation/`: Access modifiers (`private`, `public`), getters and setters
- `Inheritance/`: Using `extends`, reusing logic, class hierarchies
- `Polymorphism/`: Method overloading and overriding
- `Abstraction/`: Abstract classes and interfaces
- `Constructors/`: Default and parameterized constructors
- `Modifiers/`: `static`, `final`, and visibility modifiers
- `Collections/`: Lists, Sets, Maps, iteration using loops and enhanced for
- `Exceptions/`: `try`, `catch`, `finally`, custom exceptions
- `Enums/`: Enumerations and constants
- `Packages/`: Organizing code, importing classes
- `Streams/`: (Optional) Java 8+ functional programming with `map`, `filter`, `reduce`

## 🧪 Folder Structure Example

```
advanced/
├── OOP/
│   ├── Person.java              # Class definition
│   └── Main.java                # Object instantiation
├── Encapsulation/
│   └── BankAccount.java         # Getters and setters
├── Inheritance/
│   ├── Animal.java
│   └── Dog.java                 # Extending a base class
├── Polymorphism/
│   └── MethodOverloading.java
├── Abstraction/
│   ├── AbstractShape.java
│   └── Circle.java
├── Constructors/
│   └── Car.java                 # Constructor with and without parameters
├── Modifiers/
│   └── StaticExample.java
├── Collections/
│   ├── ArrayListExample.java
│   └── HashMapExample.java
├── Exceptions/
│   ├── TryCatchExample.java
│   └── CustomException.java
├── Enums/
│   └── DaysOfWeek.java
├── Packages/
│   └── myapp/utils/Helper.java
└── Streams/
    └── StreamExample.java       # Java 8 streams and lambda
```

## 🚀 How to Run

To compile Java files in nested folders with packages, use:

```bash
javac -d . FileName.java
java path.to.MainClass
```

If using an IDE like IntelliJ IDEA or VS Code, configure your project as a Java workspace.

## 📌 Notes

This section aims to reinforce object-oriented design and prepare for professional-level backend development in frameworks like Spring Boot.

---

📄 Authored by **Ian Scateni** – Java advanced training for the `Architect Track`.