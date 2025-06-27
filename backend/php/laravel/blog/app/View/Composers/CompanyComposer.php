<?php

namespace App\View\Composers;

use Illuminate\View\View;

class CompanyComposer
{
    public function compose(View $view): void
    {
     $view->with('title', 'Bienvenido a mi blog');
    }

}

?>