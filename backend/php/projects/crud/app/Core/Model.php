<?php
namespace App\Core;

use PDO;
use App\Config\Database;

abstract class Model {

    protected PDO $db;

    public function __construct() {

        $this->db = Database::getInstance();
        
    }

}