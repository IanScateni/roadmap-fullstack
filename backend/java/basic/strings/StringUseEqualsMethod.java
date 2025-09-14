public class StringUseEqualsMethod {
    public static void main(String args[]) {

        // B is capital
        String fruit1 = "Banana";

        // b is small
        String fruit2 = "banana";

        // B is capital
        String fruit3 = "Banana";

        // will be false since the case do not match
        boolean result1 = fruit1.equals(fruit2);

        // will be true since the case matches
        boolean result2 = fruit1.equals(fruit3);

        System.out.println("Using equals() method \"" +  fruit1 + "\" is equal to \"" + fruit2 + "\": " + result1);
        System.out.println("Using equals() method \"" +  fruit1 + "\" is equal to \"" + fruit3 + "\": " + result2);
    }
}