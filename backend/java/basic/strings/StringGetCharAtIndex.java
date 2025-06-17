public class StringGetCharAtIndex {
    public static void main(String args[]) {

        String fruit = "Banana";

        // This will be 'a', because 'B' is at index 0 and 'a' is at index 1
        char letter = fruit.charAt(4);

        System.out.println("The character at index 1 is: " + letter);
    }
}