<?php
namespace App\Core;

class View {

    public static function render(string $viewPath, array $data = []): void {
        extract($data, EXTR_SKIP);
        require $viewPath;
    }
    
}