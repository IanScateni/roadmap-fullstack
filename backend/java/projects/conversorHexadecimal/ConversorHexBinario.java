import java.util.Scanner;

public class ConversorHexBinario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número entero: ");
        int numero = scanner.nextInt();

        System.out.println("Seleccione el tipo de conversión:");
        System.out.println("1. Hexadecimal");
        System.out.println("2. Binario");
        System.out.print("Opción: ");
        int opcion = scanner.nextInt();

        switch (opcion) {
            case 1:
                String hex = Integer.toHexString(numero).toUpperCase();
                System.out.println("Hexadecimal: " + hex);
                break;
            case 2:
                String bin = Integer.toBinaryString(numero);
                System.out.println("Binario: " + bin);
                break;
            default:
                System.out.println("Opción no válida. Intente nuevamente.");
        }

        scanner.close();
    }
}