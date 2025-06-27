<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
  
    public function index()
    {
        return view('posts.index');
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store()
    {
        return view('posts.index');
    }
    
    public function show($post)
    {
        return view('posts.show', compact('post'));
        
    }
    
    public function edit($post)
    {
        return view('posts.edit', compact('post'));
    }

    public function update($post)
    {
        return "Actualizar un registro con POST: " . $post;
    }

    public function destroy($post)
    {
        return "Eliminar un registro con POST: " . $post;
    }

}
