<?php
namespace App\Config;

use PDO;
use PDOException;

class Database {

    private static ?Database $instance = null;
    private PDO $connection;

    private function __construct() {

        $host     = '127.0.0.1';
        $db       = 'emlaze';
        $user     = 'root';
        $pass     = '';
        $charset  = 'utf8mb4';
        $dsn      = "mysql:host=$host;dbname=$db;charset=$charset";

        try {

            $this->connection = new PDO(
                $dsn,
                $user,
                $pass,
                [
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                ]
            );

        } catch (PDOException $e) {

            exit('DB Connection Error: ' . $e->getMessage());
            
        }

    }

    public static function getInstance(): PDO {

        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance->connection;

    }

}