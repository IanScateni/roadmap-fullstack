<div class="container my-5" style="max-width:400px; min-height: 60vh;">
  <h2>Inicia sesión</h2>
  <?php if (!empty($error)): ?>
    <div class="alert alert-danger"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>
  <form method="post" action="/login">
    <div class="mb-3">
      <label class="form-label">Usuario</label>
      <input name="username" class="form-control" required autofocus>
    </div>
    <div class="mb-3">
      <label class="form-label">Contraseña</label>
      <input name="password" type="password" class="form-control" required>
    </div>
    <button class="btn btn-primary w-100">Entrar</button>
  </form>
</div>