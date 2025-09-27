import java.util.Scanner;

public class ConversorHexadecimal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número entero: ");
        int numero = scanner.nextInt();

        String hexadecimal = Integer.toHexString(numero).toUpperCase();

        System.out.println("El número " + numero + " en hexadecimal es: " + hexadecimal);

        scanner.close();
    }
}