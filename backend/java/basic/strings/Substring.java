public class Substring {
  public static void main(String args[]) {

    String fruit = "Banana";

    // This will be "ana"
    String partFrom1To4 = fruit.substring(1, 4);
    String partFrom4To5 = fruit.substring(4, 6);

    System.out.println("The full string is: " + fruit);
    System.out.println("The substring from index 1 to 4. 4 excluded: " + partFrom1To4);
    System.out.println("The substring from index 4 to 5. 5 excluded: " + partFrom4To5);


    String text = "subscription";
    String extractedText = text.substring(3, 9);
    System.out.println("The extracted text is: " + extractedText);

  }
}