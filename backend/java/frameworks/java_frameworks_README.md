# 📘 Java – Frameworks

This folder contains Java backend frameworks, with a primary focus on **Spring Boot**. These tools help build scalable, modular, and production-ready applications.

## 🎯 Purpose

The goal of this section is to explore:

- Modern backend development using Spring Boot
- RESTful API architecture with controllers, services, and repositories
- Integration with databases using JPA/Hibernate
- Dependency Injection and Inversion of Control (IoC)
- Real-world enterprise patterns in Java

## 📁 Folder Structure Example

```
frameworks/
├── spring/
│   ├── hello-springboot/           # Minimal Spring Boot API
│   ├── rest-crud-example/          # Basic REST API with JPA
│   ├── mvc-architecture/           # Layered MVC architecture
│   └── spring-security-demo/       # Auth with Spring Security
└── README.md
```

Each project inside `spring/` has its own `README.md` with details on configuration, structure, and how to run it.

## 🚀 How to Run (Spring Boot Projects)

```bash
./mvnw spring-boot:run
```

Or using Gradle:

```bash
./gradlew bootRun
```

## 🔧 Technologies Covered

- Spring Boot
- Spring MVC
- Spring Security
- Spring Data JPA
- Thymeleaf (optional for UI)
- H2, MySQL, or PostgreSQL for persistence

---

📄 Curated by **Ian Scateni** – Spring Boot and Java frameworks for the `Architect Track`.