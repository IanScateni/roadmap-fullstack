CREATE DATABASE IF NOT EXISTS emlaze CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE emlaze;

-- Tabla de usuarios
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password CHAR(64) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Usuario de prueba: admin / secret
INSERT INTO usuarios (username, password)
VALUES ('admin', SHA2('secret', 256));

-- Tabla de productos
DROP TABLE IF EXISTS productos;
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sku INT NOT NULL UNIQUE,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  cantidad FLOAT NOT NULL,
  precio FLOAT NOT NULL,
  total FLOAT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Productos de ejemplo
INSERT INTO productos (sku, nombre, descripcion, cantidad, precio, total) VALUES
(1001, 'Producto A', 'Descripción A', 5, 10.00, 5 * 10.00),
(1002, 'Producto B', 'Descripción B', 3, 20.50, 3 * 20.50),
(1003, 'Producto C', 'Descripción C', 2, 15.75, 2 * 15.75),
(1004, 'Producto D', 'Descripción D', 10, 5.25, 10 * 5.25),
(1005, 'Producto E', 'Descripción E', 1, 100.00, 1 * 100.00),
(1006, 'Producto F', 'Descripción F', 4, 12.30, 4 * 12.30),
(1007, 'Producto G', 'Descripción G', 6, 8.80, 6 * 8.80),
(1008, 'Producto H', 'Descripción H', 7, 7.99, 7 * 7.99),
(1009, 'Producto I', 'Descripción I', 9, 3.50, 9 * 3.50),
(1010, 'Producto J', 'Descripción J', 8, 11.25, 8 * 11.25);