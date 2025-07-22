<?php
namespace App\Models;

use App\Core\Model;
use PDO;

class User extends Model {
    /**
     *
     * @param string 
     * @return array|null
     */
    public function findByUsername(string $username): ?array {
        $stmt = $this->db->prepare(
            'SELECT * FROM usuarios WHERE username = :u'
        );
        $stmt->execute(['u' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        return $user ?: null;
    }
}