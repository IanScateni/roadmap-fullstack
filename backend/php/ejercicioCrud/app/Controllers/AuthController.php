<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Models\User;

class AuthController extends Controller {

    public function login(): void {

        if (!empty($_SESSION['user'])) {
            header('Location: /products');
            exit;
        }

        $error = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = trim($_POST['username'] ?? '');
            $password = $_POST['password'] ?? '';

            if ($username === '' || $password === '') {
                $error = 'Usuario y contraseña son obligatorios.';
            } else {
                $userModel = $this->model('User');
                $user = $userModel->findByUsername($username);
                if ($user && hash('sha256', $password) === $user['password']) {
                    $_SESSION['user'] = $user['username'];
                    header('Location: /products');
                    exit;
                }
                $error = 'Credenciales inválidas.';
            }        }

        $this->view('auth/login', ['error' => $error]);
        
    }

    public function logout(): void {

        session_destroy();
        header('Location: /');
        exit;
    
    }

}