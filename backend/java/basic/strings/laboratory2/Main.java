public class Main {
public static void main(String[] args) {
    String[] superheroes = {"Batman", "Superman", "Wonder Woman", "Spider-Man", "Iron Man"};
    int[] introductionYears = {1939, 1938, 1941, 1962, 1963};

    System.out.println("Super Heroes Names:");

    System.out.println(superheroes[0]);
    System.out.println(superheroes[1]);
    System.out.println(superheroes[2]);
    System.out.println(superheroes[3]);
    System.out.println(superheroes[4]);

    System.out.println("\nIntroduction Years:");

    System.out.println(introductionYears[0]);
    System.out.println(introductionYears[1]);
    System.out.println(introductionYears[2]);
    System.out.println(introductionYears[3]);
    System.out.println(introductionYears[4]);

    System.out.println(superheroes[2]);

    superheroes[2] = "Captain Marvel";

    System.out.println(superheroes[2]);

    
    System.out.println(superheroes.length);
    System.out.println(introductionYears.length);

    
  }
}