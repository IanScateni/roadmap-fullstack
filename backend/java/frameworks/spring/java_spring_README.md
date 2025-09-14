# 🌱 Java – Spring Framework

This folder contains hands-on projects built with **Spring Boot**, one of the most powerful and widely used frameworks in enterprise Java backend development.

## 🧠 Topics Covered

- Project structure and Spring Boot conventions
- Controller-Service-Repository architecture
- REST API development with `@RestController`
- Dependency Injection (`@Autowired`, constructor injection)
- Spring Data JPA for persistence with MySQL or H2
- Spring Security (JWT, roles, auth)
- Environment config via `application.properties` or `.yml`
- Unit testing with JUnit and Mockito (optional)

## 📁 Folder Structure Example

```
spring/
├── hello-springboot/         # Minimal "Hello World" Spring app
├── rest-crud-example/        # API with CRUD operations and JPA
├── mvc-architecture/         # Domain-driven structure with DTOs
├── spring-security-demo/     # Authenticated and protected routes
└── README.md
```

Each project has its own folder with:

- `src/main/java/...`: Application logic
- `src/main/resources/`: Configuration files
- `pom.xml` or `build.gradle`: Dependencies and plugins

## 🚀 How to Run

Use Maven or Gradle from the project root:

```bash
./mvnw spring-boot:run
# or
./gradlew bootRun
```

Then access:

```
http://localhost:8080/
```

## 📌 Notes

These projects are structured to reflect real-world backend architectures. They serve as a solid foundation for developing scalable services in microservice or monolith environments.

---

📄 Built and maintained by **Ian Scateni** – Spring Boot track of the `Architect Track`.