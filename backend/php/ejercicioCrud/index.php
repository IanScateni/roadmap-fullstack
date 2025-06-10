<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

spl_autoload_register(function(string $class) {
    $prefix  = 'App\\';
    $baseDir = __DIR__ . '/app/';

    if (strncmp($prefix, $class, strlen($prefix)) !== 0) {
        return;
    }

    $relativeClass = substr($class, strlen($prefix));
    $file = $baseDir . str_replace('\\', '/', $relativeClass) . '.php';

    if (file_exists($file)) {
        require $file;
    }
});

use App\Core\Router;
use App\Controllers\AuthController;
use App\Controllers\ProductController;

$router    = new Router();
$authCtrl  = new AuthController();
$prodCtrl  = new ProductController();


$router->add('/', [$authCtrl, 'login']);

$router->add('/login', [$authCtrl, 'login']);

$router->add('/logout', [$authCtrl, 'logout']);

$router->add('/products/create', function() use ($prodCtrl) {

    if (empty($_SESSION['user'])) {
        header('Location: /');
        exit;
    }
    $prodCtrl->create();

});

$router->add('/products/store', function() use ($prodCtrl) {

    if (empty($_SESSION['user'])) {
        header('Location: /');
        exit;
    }
    $prodCtrl->store();

});

$router->add('/products/edit', function() use ($prodCtrl) {
    
    if (empty($_SESSION['user'])) {
        header('Location: /'); exit;
    }
    $prodCtrl->edit(); 
});

$router->add('/products/update', function() use ($prodCtrl) {

    if (empty($_SESSION['user'])) {
        header('Location: /'); exit;
    }
    $prodCtrl->update(); 
    
});

$router->add('/products/delete', function() use ($prodCtrl) {

    if (empty($_SESSION['user'])) {
        header('Location: /'); exit;
    }
    $prodCtrl->delete(); 
    
});

$router->add('/products/check-sku', function() use ($prodCtrl) {

  if (empty($_SESSION['user'])) {
    header('HTTP/1.1 403 Forbidden');
    exit;
  }
  $prodCtrl->checkSku();

});

$router->add('/products', function() use ($prodCtrl) {

    if (empty($_SESSION['user'])) {
        header('Location: /');
        exit;
    }
    $prodCtrl->index();

});

$router->dispatch($_SERVER['REQUEST_URI']);