<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <title>EMLAZE Test PHP Puro</title>
</head>
<body class="d-flex flex-column min-vh-100">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
  <div class="container">

    <a class="navbar-brand d-flex align-items-center" href="/products">
      <i class="fas fa-boxes fa-lg me-2"></i>
      <span class="fs-4">EMlaze</span>
    </a>

    <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#mainNav" 
      aria-controls="mainNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="mainNav">
      <ul class="navbar-nav mx-auto">
        <?php if (!empty($_SESSION['user'])): ?>
          <li class="nav-item mx-2">
            <a class="nav-link" href="/products">
              <i class="fas fa-th-list me-1"></i> Productos
            </a>
          </li>
        <?php endif; ?>
      </ul>
    </div>

    <?php if (!empty($_SESSION['user'])): ?>
      <form action="/logout" method="post" class="d-flex">
        <button type="submit" class="btn btn-outline-light">
          <i class="fas fa-sign-out-alt me-1"></i> Cerrar sesión
        </button>
      </form>
    <?php endif; ?>
  </div>
</nav>
<main class="flex-fill py-4">