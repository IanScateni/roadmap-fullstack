<div class="container mt-4">

  <div class="d-flex justify-content-between align-items-center mb-3">
    <h2>Listado de Productos</h2>
    <a href="/products/create" class="btn btn-success">
      <i class="fas fa-plus-circle me-1"></i> Crear Producto
    </a>
  </div>

  <form action="/products" method="get" class="row g-3 mb-4">
    <div class="col-md-3">
      <input
        type="text"
        name="search"
        value="<?= htmlspecialchars($filters['search'] ?? '') ?>"
        class="form-control"
        placeholder="Buscar por nombre o SKU"
      >
    </div>
    <div class="col-md-2">
      <input
        type="number"
        step="0.01"
        name="min_price"
        value="<?= htmlspecialchars($filters['min_price'] ?? '') ?>"
        class="form-control"
        placeholder="Precio min"
      >
    </div>
    <div class="col-md-2">
      <input
        type="number"
        step="0.01"
        name="max_price"
        value="<?= htmlspecialchars($filters['max_price'] ?? '') ?>"
        class="form-control"
        placeholder="Precio max"
      >
    </div>
    <div class="col-md-2">
      <select name="perPage" class="form-select">
        <?php foreach ([10, 20] as $pp): ?>
          <option value="<?= $pp ?>" <?= $perPage == $pp ? 'selected' : '' ?>>
            <?= $pp ?> / pág
          </option>
        <?php endforeach; ?>
      </select>
    </div>
    <div class="col-md-3 text-end">
      <button class="btn btn-primary">Filtrar</button>
      <a href="/products" class="btn btn-secondary">Limpiar</a>
    </div>
  </form>

  <table class="table table-bordered mb-5">
    <thead>
      <tr>
        <th>ID</th>
        <th>SKU</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Cant.</th>
        <th>Precio</th>
        <th>Total</th>
        <th>Creación</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <?php if (empty($products)): ?>
        <tr>
          <td colspan="8" class="text-center">No hay productos.</td>
        </tr>
      <?php else: ?>
        <?php foreach ($products as $p): ?>
          <tr>
            <td><?= $p['id'] ?></td>
            <td><?= $p['sku'] ?></td>
            <td><?= htmlspecialchars($p['nombre']) ?></td>
            <td><?= htmlspecialchars($p['descripcion']) ?></td>
            <td><?= $p['cantidad'] ?></td>
            <td><?= number_format($p['precio'], 2) ?></td>
            <td><?= number_format($p['total'], 2) ?></td>
            <td><?= $p['fecha_creacion'] ?></td>
            <td>
              <a href="/products/edit?id=<?= $p['id'] ?>" class="btn btn-sm btn-primary">Editar</a>
              <a href="/products/delete?id=<?= $p['id'] ?>"
                onclick="return confirm('¿Eliminar este producto?');"
                class="btn btn-sm btn-danger" >
                Eliminar
              </a>
            </td>
          </tr>
        <?php endforeach; ?>
      <?php endif; ?>
    </tbody>
  </table>

  <?php if ($totalPages > 1): ?>
    <nav>
      <ul class="pagination justify-content-center">
        <?php for ($i = 1; $i <= $totalPages; $i++): 

          $params = http_build_query([
            'page'      => $i,
            'perPage'   => $perPage,
            'search'    => $filters['search'] ?? '',
            'min_price' => $filters['min_price'] ?? '',
            'max_price' => $filters['max_price'] ?? ''
          ]);
        ?>
          <li class="page-item <?= $page == $i ? 'active' : '' ?>">
            <a class="page-link" href="/products?<?= $params ?>">
              <?= $i ?>
            </a>
          </li>
        <?php endfor; ?>
      </ul>
    </nav>
  <?php endif; ?>

</div>