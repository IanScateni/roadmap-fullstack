import java.util.Scanner;

public class PagoAsesor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final double SUELDO_BASE = 1600000;

        System.out.print("Ingrese el total de ventas del asesor: ");
        double venta = sc.nextDouble();

        double comision;

        if (venta < 500000) {
            comision = 0;
        } else if (venta < 1000000) {
            comision = venta * 0.05;
        } else if (venta < 1500000) {
            comision = venta * 0.10;
        } else if (venta < 2000000) {
            comision = venta * 0.15;
        } else {
            comision = venta * 0.20;
        }

        double pagoTotal = SUELDO_BASE + comision;

        System.out.println("El pago total del asesor es: " + pagoTotal);

        sc.close();
    }
}