public class Main {
  public static void main(String[] args) {
    String nombre = "Sandy";
    String apellido = "Jones";
    String tituloPelicula = "El código fuente";
    int entradas = 8;
    double precioEntrada = 10.57;

    System.out.println("Nombre: " + nombre);
    System.out.println("Apellido: " + apellido);
    System.out.println("Título de la película: " + tituloPelicula);
    System.out.println("Número de entradas: " + entradas);  
    System.out.printf("Precio de cada entrada: %.2f%n", precioEntrada);

    System.out.println("Precio total: " + (entradas * precioEntrada));

    System.out.println("Nombre completo: " + nombre.toLowerCase() + " " + apellido.toLowerCase());
  }
}

