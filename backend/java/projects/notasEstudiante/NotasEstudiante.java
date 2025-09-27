import java.util.Scanner;

public class NotasEstudiante {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el nombre del estudiante: ");
        String nombre = scanner.nextLine();

        System.out.print("Ingrese la primera nota: ");
        double nota1 = scanner.nextDouble();

        System.out.print("Ingrese la segunda nota: ");
        double nota2 = scanner.nextDouble();

        double promedio = (nota1 + nota2) / 2;

        System.out.println("\n===== RESULTADO ACADÉMICO =====");
        System.out.println("Estudiante: " + nombre);
        System.out.println("Nota 1: " + nota1);
        System.out.println("Nota 2: " + nota2);
        System.out.println("Promedio: " + String.format("%.2f", promedio));

        if (promedio >= 3.0) {
            System.out.println("Estado: APROBO");
        } else {
            System.out.println("Estado: REPROBO");
        }

        scanner.close();
    }
}