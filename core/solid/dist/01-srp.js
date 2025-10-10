"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class ProductService {
        getProduct(id) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }
        saveProduct(product) {
            console.log('Guardando en base de datos', product);
        }
    }
    class Mailer {
        masterEmail = 'CorreoPrincipal@mail.com';
        sendEmail(emailList, template) {
            console.log('Enviando correo a los clientes', template);
        }
    }
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        productService;
        mailer;
        constructor(productService, mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
        loadProduct(id) {
            this.productService.getProduct(id);
        }
        saveProduct(product) {
            this.productService.saveProduct(product);
        }
        notifyClients() {
            this.mailer.sendEmail(['usuario@email.com'], 'to-clients');
        }
    }
    class CartBloc {
        onAddToCart(productId) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }
    const productService = new ProductService();
    const mailer = new Mailer();
    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);
})();
//# sourceMappingURL=01-srp.js.map