<?php
namespace App\Core;

class Router {
    
    /** @var array<string, callable> */
    private array $routes = [];

    /**
     * Registro una ruta y su callback.
     *
     * @param string   
     * @param callable 
     */
    public function add(string $path, callable $callback): void {
        $this->routes[$path] = $callback;
    }

    /**
     * Muestra la ruta o un 404.
     *
     * @param string 
     */
    public function dispatch(string $uri): void {

        $path = parse_url($uri, PHP_URL_PATH) ?: '/';

        if (isset($this->routes[$path])) {
            call_user_func($this->routes[$path]);
        } else {
            http_response_code(404);
            echo '<h1>404 Not Found</h1>';
        }
        
    }
}