public class StringContainsSubstring {
    public static void main(String args[]) {

        // B is capital
        String fruit = "Banana";

        boolean hasAna = fruit.contains("ana");
        boolean hasBrooks = fruit.contains("brooks");

        System.out.println("The fruit: \"" + fruit + "\"");
        System.out.println("The fruit \"" + fruit + "\" contains the substring \"ana\": " + hasAna);
        System.out.println("The fruit \"" + fruit + "\" contains the substring \"brooks\": " + hasBrooks);
    }
}