public class Strings {
    public static void main(String args[]) {
        String text = "Adventure";
        // TODO: Check the length using length() and print the length
        // TODO: Get the character at position 3 and print the character        
        // TODO: Get a part of the String from position 1 to 4 and print the string
        System.out.println("Check Length: " + text.length());
        System.out.println("Character position 3: " + text.charAt(2));
        System.out.println("SubString 1 a 4: " + text.substring(1, 4));



        String anotherText= "Adventure";
        // TODO: Compare text with anotherText using equals() and print the output
        // TODO: Change to uppercase using toUpperCase() and print the converted string
        // TODO: Change to lowercase using toLowerCase() and print the converted string
        // TODO: Check if it contains "vent" using contains() and print the output
        // TODO: Replace 'e' with 'a' and print the output

        System.out.println("Equals anotherText: " + text.equals(anotherText));
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Lowercase: " + text.toLowerCase());
        System.out.println("Contains: " + text.contains("vent"));
        System.out.println("Replace 'e' with 'a': " + text.replace('e', 'a'));
    }
}