import java.util.Scanner;

public class FacturaConIvaVariable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingresa el valor del artículo: ");
        double valorArticulo = scanner.nextDouble();

        System.out.print("Ingresa la cantidad: ");
        int cantidad = scanner.nextInt();

        System.out.print("Ingresa el porcentaje de IVA (ej. 19 para 19%): ");
        double ivaPorcentaje = scanner.nextDouble();

        double subtotal = valorArticulo * cantidad;
        double impuesto = subtotal * (ivaPorcentaje / 100);
        double total = subtotal + impuesto;

        System.out.println("\n===== FACTURA =====");
        System.out.println("Valor del artículo: $" + valorArticulo);
        System.out.println("Cantidad: " + cantidad);
        System.out.println("Subtotal: $" + String.format("%.2f", subtotal));
        System.out.println("IVA (" + ivaPorcentaje + "%): $" + String.format("%.2f", impuesto));
        System.out.println("El total a pagar: $" + String.format("%.2f", total));
        System.out.println("===================");

        scanner.close();
    }
}