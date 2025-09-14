public class StringReplaceAllChar {
    public static void main(String args[]) {

        // B is capital
        String fruit = "Banana";

        String fruitWithLetter_A_replacedWith_O = fruit.replace('a','o');

        System.out.println("The fruit: \"" + fruit + "\"");
        System.out.println("The fruit \"" + fruit + "\" with character \"a\" replaced with character \"o\": " + fruitWithLetter_A_replacedWith_O);
    }
}