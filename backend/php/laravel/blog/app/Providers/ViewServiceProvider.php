<?php

namespace App\Providers;

use App\View\Composers\CompanyComposer;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        view()->share('title', 'Prueba Posts');
        
        view()->composer(['welcome'], CompanyComposer::class);

    }
}
