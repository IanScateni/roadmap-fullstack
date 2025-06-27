<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostsController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class
    )->name('home');

Route::resource('posts', PostsController::class);

