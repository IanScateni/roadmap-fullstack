<div class="container my-5" style="max-width:600px;">
  <h2><?= strpos($action, 'store') !== false ? 'Crear' : 'Editar' ?> Producto</h2>

  <form id="product-form" method="post" action="<?= $action ?>">

    <div class="mb-3">
      <label class="form-label">SKU</label>
      <input
        type="number"
        name="sku"
        id="sku"
        class="form-control <?= isset($errors['sku']) ? 'is-invalid' : '' ?>"
        value="<?= htmlspecialchars($product['sku']) ?>"
        min="1000"
        required
      >
      <div id="sku-error" class="invalid-feedback">
        <?= $errors['sku'] ?? '' ?>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Nombre</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        class="form-control <?= isset($errors['nombre']) ? 'is-invalid' : '' ?>"
        value="<?= htmlspecialchars($product['nombre']) ?>"
        required
      >
      <div class="invalid-feedback">
        <?= $errors['nombre'] ?? '' ?>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Descripción</label>
      <textarea
        name="descripcion"
        id="descripcion"
        class="form-control"
      ><?= htmlspecialchars($product['descripcion']) ?></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">Cantidad</label>
      <input
        type="number"
        name="cantidad"
        id="cantidad"
        class="form-control <?= isset($errors['cantidad']) ? 'is-invalid' : '' ?>"
        value="<?= htmlspecialchars($product['cantidad']) ?>"
        min="1"
        required
      >
      <div class="invalid-feedback">
        <?= $errors['cantidad'] ?? '' ?>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Precio</label>
      <input
        type="number"
        step="0.01"
        name="precio"
        id="precio"
        class="form-control <?= isset($errors['precio']) ? 'is-invalid' : '' ?>"
        value="<?= htmlspecialchars($product['precio']) ?>"
        min="1"
        required
      >
      <div class="invalid-feedback">
        <?= $errors['precio'] ?? '' ?>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Total</label>
      <input
        type="text"
        id="total"
        class="form-control"
        value="<?= number_format($product['cantidad'] * $product['precio'], 2) ?>"
        readonly
      >
    </div>

    <button type="submit" id="submit-btn" class="btn btn-success">Guardar</button>
    <a href="/products" class="btn btn-secondary">Cancelar</a>
  </form>
</div>

<script>

  const skuEl = document.getElementById('sku');
  const submitBtn = document.getElementById('submit-btn');
  const errorEl = document.getElementById('sku-error');
  const cantidadEl = document.getElementById('cantidad');
  const precioEl = document.getElementById('precio');
  const totalEl = document.getElementById('total');

  if (!skuEl || !submitBtn || !errorEl || !cantidadEl || !precioEl || !totalEl) {
    console.error('Faltan elementos en el formulario');
  }

  function updateTotal() {
    const cantidad = parseFloat(cantidadEl.value) || 0;
    const precio = parseFloat(precioEl.value) || 0;
    totalEl.value = (cantidad * precio).toFixed(2);
  }
  cantidadEl.addEventListener('input', updateTotal);
  precioEl.addEventListener('input', updateTotal);

  let debounceTimer;
  skuEl.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    skuEl.classList.remove('is-invalid');
    errorEl.textContent = '';
    submitBtn.disabled = false;

    const sku = skuEl.value.trim();
    if (!sku) return;

    debounceTimer = setTimeout(() => {
      fetch(`/products/check-sku?sku=${encodeURIComponent(sku)}`)
        .then(res => res.json())
        .then(data => {
          if (data.exists) {
            errorEl.textContent = 'El SKU ya existe.';
            skuEl.classList.add('is-invalid');
            submitBtn.disabled = true;
          }
        })
        .catch(err => console.error('Error AJAX SKU:', err));
    }, 500);
  });
</script>