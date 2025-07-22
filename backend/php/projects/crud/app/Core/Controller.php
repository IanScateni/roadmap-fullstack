<?php
namespace App\Core;

abstract class Controller {
    /**
     *
     * @param string 
     * @return object 
     */
    protected function model(string $modelName) {

        $class = "App\\Models\\$modelName";
        return new $class();

    }

    /**
     * Renderiza la vista con datos.
     *
     * @param string 
     * @param array 
     */
    protected function view(string $view, array $data = []): void {
        
        extract($data, EXTR_SKIP);
        require __DIR__ . "/../Views/layout/header.php";
        require __DIR__ . "/../Views/$view.php";
        require __DIR__ . "/../Views/layout/footer.php";

    }
    
}