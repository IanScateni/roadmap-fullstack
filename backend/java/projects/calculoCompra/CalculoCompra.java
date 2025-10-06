import java.util.Scanner;

public class CalculoCompra {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Ingrese el precio del producto 1: ");
        double p1 = sc.nextDouble();

        System.out.print("Ingrese el precio del producto 2: ");
        double p2 = sc.nextDouble();

        System.out.print("Ingrese el precio del producto 3: ");
        double p3 = sc.nextDouble();

        double subtotal = p1 + p2 + p3;
        double iva = subtotal * 0.19;
        double total = subtotal + iva;

        System.out.println("El SUBTOTAL es: " + subtotal);
        System.out.println("El IVA es: " + iva);
        System.out.println("El TOTAL A PAGAR es: " + total);

        sc.close();
    }
}