# 🧾 Prueba Técnica - Gestión de Empleados (Symfony + DDD + CQRS)

Proyecto desarrollado como prueba técnica con Symfony, siguiendo buenas prácticas de DDD, CQRS y TDD.

---

## 🚀 Tecnologías

- PHP 8.3
- Symfony
- Docker + Docker Compose
- PostgreSQL
- PHPUnit
- Composer
- Doctrine ORM

---

## ⚙️ Estructura del Proyecto

- `src/Domain`: Entidades, ValueObjects y Repositorios (DDD)
- `src/Application`: Casos de uso (Commands & Handlers)
- `src/Infrastructure`: Adaptadores, Repositorios persistentes
- `tests/`: Tests unitarios
- `config/`: Configuración Symfony

---

## 🐳 Instalación con Docker

1. Clona el repositorio:

```bash
git clone https://github.com/IanScateni/roadmap-fullstack/tree/main/backend/php/frameworks/symfony/rrhh.git
cd prueba-rrhh
```

2. Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

3. Levanta los contenedores:

```bash
docker-compose up -d
```

4. Instala dependencias de PHP:

```bash
docker exec -it prueba_rrhh_app composer install
```

5. Crea las tablas de base de datos:

Este proyecto no incluye migraciones automáticas. Para usar Doctrine Migrations, debe configurarlas.  
Si no puede generar las tablas directamente con:

```bash
docker exec -it prueba_rrhh_app php bin/console doctrine:schema:create
```

---

## ✅ Ejecutar tests

```bash
docker exec -it prueba_rrhh_app ./vendor/bin/phpunit --testdox
```

---

## 📦 Variables de entorno esperadas

Asegúrate de definir correctamente estas variables en `.env`:

```env
DATABASE_URL=pgsql://symfony:symfony@db:5432/prueba_rrhh
```

---

## 🧪 Features implementadas

- [x] Crear empleados (nombre, email, rol, salario, departamento)
- [x] Cambiar estado del empleado (activo, inactivo, vacaciones)
- [x] Eventos de dominio al cambiar estado
- [x] Endpoints REST (Controladores Symfony)
- [x] Tests unitarios
- [x] Arquitectura limpia: DDD + CQRS
- [x] Persistencia con Doctrine + PostgreSQL
- [x] Docker para entorno local
