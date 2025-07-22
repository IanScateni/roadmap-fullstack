<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Models\Product;

class ProductController extends Controller {
    /**
     * Lista productos con filtros y paginación.
     */
    public function index(): void {

        if (empty($_SESSION['user'])) {
            header('Location: /');
            exit;
        }

        $rawSearch    = trim($_GET['search']    ?? '');
        $rawMinPrice  = trim($_GET['min_price'] ?? '');
        $rawMaxPrice  = trim($_GET['max_price'] ?? '');
        $rawPage      = $_GET['page']           ?? '1';
        $rawPerPage   = $_GET['perPage']        ?? '10';

        $search   = $rawSearch   !== '' ? $rawSearch   : null;
        $minPrice = $rawMinPrice !== '' ? (float)$rawMinPrice : null;
        $maxPrice = $rawMaxPrice !== '' ? (float)$rawMaxPrice : null;
        $page     = max(1, (int)$rawPage);
        $perPage  = max(1, (int)$rawPerPage);

        $filters = [
            'search'    => $search,
            'min_price' => $minPrice,
            'max_price' => $maxPrice,
            'page'      => $page,
            'perPage'   => $perPage,
        ];

        $model  = $this->model('Product');
        $result = $model->getAll($filters);

        $totalPages = (int) ceil($result['total'] / $perPage);

        $this->view('product/index', [
            'products'   => $result['data'],
            'total'      => $result['total'],
            'page'       => $page,
            'perPage'    => $perPage,
            'totalPages' => $totalPages,
            'filters'    => $filters,
        ]);

    }

    /**
     * Muestra el formulario para crear un producto.
     */
    public function create(): void {

        $this->view('product/form', [
        'action' => '/products/store',
        'product' => [ 'sku'=>'', 'nombre'=>'', 'descripcion'=>'', 'cantidad'=>1, 'precio'=>1.00 ],
        'errors'  => []
        ]);

    }

    /**
     * Procesa el POST de creación y redirige.
     */
    public function store(): void {

        $data = [
        'sku'         => $_POST['sku'] ?? '',
        'nombre'      => $_POST['nombre'] ?? '',
        'descripcion' => $_POST['descripcion'] ?? '',
        'cantidad'    => $_POST['cantidad'] ?? 0,
        'precio'      => $_POST['precio'] ?? 0,
        ];

        $errors = [];
        if (!is_numeric($data['sku']) || $data['sku'] <= 0) {
        $errors['sku'] = 'SKU debe ser un número positivo.';
        }
        if ($data['nombre']==='') {
        $errors['nombre'] = 'Nombre es obligatorio.';
        }
        if ($data['cantidad'] < 1) {
        $errors['cantidad'] = 'Cantidad mínima es 1.';
        }
        if ($data['precio'] < 1) {
        $errors['precio'] = 'Precio mínimo es 1.';
        }

        if ($errors) {

            $this->view('product/form', [
            'action'  => '/products/store',
            'product' => $data,
            'errors'  => $errors
            ]);
            return;
        }

        $model = $this->model('Product');
        $model->save($data);

        header('Location: /products');
        exit;
    }

    /**
     * Muestra el formulario para editar un producto.
     */
    public function edit(): void {

        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        $model = $this->model('Product');
        $product = $model->find($id);

        if (!$product) {
            header('Location: /products');
            exit;
        }

        $this->view('product/form', [
        'action'  => "/products/update?id={$id}",
        'product' => $product,
        'errors'  => []
        ]);

    }

    /**
     * Procesa el POST de edición y redirige al listado.
     */
    public function update(): void {

        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        $data = [
        'sku'         => $_POST['sku'] ?? '',
        'nombre'      => $_POST['nombre'] ?? '',
        'descripcion' => $_POST['descripcion'] ?? '',
        'cantidad'    => $_POST['cantidad'] ?? 0,
        'precio'      => $_POST['precio'] ?? 0,
        ];

        $errors = [];
        if (!is_numeric($data['sku']) || $data['sku'] <= 0) {
        $errors['sku'] = 'SKU debe ser un número positivo.';
        }
        if ($data['nombre']==='') {
        $errors['nombre'] = 'Nombre es obligatorio.';
        }
        if ($data['cantidad'] < 1) {
        $errors['cantidad'] = 'Cantidad mínima es 1.';
        }
        if ($data['precio'] < 1) {
        $errors['precio'] = 'Precio mínimo es 1.';
        }

        if ($errors) {

            $this->view('product/form', [
            'action'  => "/products/update?id={$id}",
            'product' => array_merge($data, ['id'=>$id]),
            'errors'  => $errors
            ]);
            return;

        }

        $model = $this->model('Product');
        $model->save($data, $id);

        header('Location: /products');
        exit;

    }

    /**
     * Elimina un producto.
     */
    public function delete(): void {
        
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        if ($id > 0) {
            $model = $this->model('Product');
            $model->delete($id);
        }
        header('Location: /products');
        exit;

    }

    /**
     * Endpoint AJAX devuelve JSON si un SKU ya existe.
     */
    public function checkSku(): void {

        $sku = isset($_GET['sku']) ? (int)$_GET['sku'] : 0;
        $exists = false;

        if ($sku > 0) {
            $productModel = $this->model('Product');
            $exists = $productModel->existsBySku($sku);
        }

        header('Content-Type: application/json');
        echo json_encode(['exists' => $exists]);
        exit;
        
    }
}