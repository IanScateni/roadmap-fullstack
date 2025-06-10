<?php
namespace App\Models;

use App\Core\Model;
use PDO;

class Product extends Model {
    /**
     * Obtiene todos los productos, con filtros opcionales y paginación.
     *
     * @param array $filters [
     *   'search' => string|null,  
     *   'min_price' => float|null,
     *   'max_price' => float|null,
     *   'page' => int,            
     *   'perPage' => int          
     * ]
     * @return array
     */
    public function getAll(array $filters): array {

      $page    = max(1, (int)($filters['page'] ?? 1));
      $perPage = max(1, (int)($filters['perPage'] ?? 10));
      $offset  = ($page - 1) * $perPage;

      $where = [];
      $params = [];

      if (!empty($filters['search'])) {
        $where[] = '(nombre LIKE :q OR sku LIKE :q)';
        $params['q'] = "%{$filters['search']}%";
      }
      if (isset($filters['min_price'])) {
        $where[] = 'precio >= :min';
        $params['min'] = $filters['min_price'];
      }
      if (isset($filters['max_price'])) {
        $where[] = 'precio <= :max';
        $params['max'] = $filters['max_price'];
      }

      $whereSql = $where ? 'WHERE '. implode(' AND ', $where) : '';

      $countStmt = $this->db->prepare("SELECT COUNT(*) FROM productos $whereSql");
      $countStmt->execute($params);
      $total = (int)$countStmt->fetchColumn();

      $stmt = $this->db->prepare(
        "SELECT * FROM productos
          $whereSql
          ORDER BY fecha_creacion DESC
          LIMIT :offset, :limit"
      );
      foreach ($params as $k => $v) {
        $stmt->bindValue(":$k", $v);
      }
      $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
      $stmt->bindValue(':limit', $perPage, PDO::PARAM_INT);
      $stmt->execute();

      return [
        'data' => $stmt->fetchAll(PDO::FETCH_ASSOC),
        'total' => $total
      ];

    }

    /**
     * Busca un producto por su ID.
     */
    public function find(int $id): ?array {
      $stmt = $this->db->prepare('SELECT * FROM productos WHERE id = :id');
      $stmt->execute(['id' => $id]);
      $prod = $stmt->fetch(PDO::FETCH_ASSOC);
      return $prod ?: null;
    }

    /**
     * Crea o actualiza un producto.
     *
     * @param array 
     * @param int|null 
     */
    public function save(array $data, ?int $id = null): bool {

      $data['total'] = $data['cantidad'] * $data['precio'];

      if ($id === null) {
        $fields = 'sku,nombre,descripcion,cantidad,precio,total';
        $placeholders = ':sku,:nombre,:descripcion,:cantidad,:precio,:total';
        $sql = "INSERT INTO productos ($fields) VALUES ($placeholders)";
      } else {
        $sql = "UPDATE productos SET
                  sku = :sku,
                  nombre = :nombre,
                  descripcion = :descripcion,
                  cantidad = :cantidad,
                  precio = :precio,
                  total = :total
                WHERE id = :id";
      }

      $stmt = $this->db->prepare($sql);
      $stmt->bindValue(':sku', $data['sku'], PDO::PARAM_INT);
      $stmt->bindValue(':nombre', $data['nombre'], PDO::PARAM_STR);
      $stmt->bindValue(':descripcion', $data['descripcion'] ?? '', PDO::PARAM_STR);
      $stmt->bindValue(':cantidad', $data['cantidad'], PDO::PARAM_STR);
      $stmt->bindValue(':precio', $data['precio'], PDO::PARAM_STR);
      $stmt->bindValue(':total', $data['total'], PDO::PARAM_STR);
      if ($id !== null) {
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
      }

      return $stmt->execute();

    }

    /**
     * Elimina un producto por su ID.
     */
    public function delete(int $id): bool {
      $stmt = $this->db->prepare('DELETE FROM productos WHERE id = :id');
      return $stmt->execute(['id' => $id]);
    }

    /**
     * Comprueba si existe un producto con el SKU.
     */
    public function existsBySku(int $sku): bool {
      $stmt = $this->db->prepare(
          'SELECT 1 FROM productos WHERE sku = :sku LIMIT 1'
      );
      $stmt->execute(['sku' => $sku]);
      return (bool)$stmt->fetchColumn();
    }
}