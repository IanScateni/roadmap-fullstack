public class Main {
  public static void main(String[] args) {
    
    String bookTitle = "The Adventures of Captain Fantastic and the Magical Unicorn";
    int titleLength = bookTitle.length();
    System.out.println("Length of the book title: " + titleLength);

    
    int maxLength = 20;

    String shortBookTitle = bookTitle.substring(0, 20);

    System.out.println("Original book title: " + bookTitle);
    System.out.println("Shortened book title: " + shortBookTitle);

    // Declare and initialize the searchWord
    String searchWord = "Captain";

    // Check if the searchWord is present in book title
    boolean containsWord = bookTitle.contains(searchWord);

    System.out.println("Does the title contain the word \"" + searchWord + "\"? " + containsWord);


    String text  = "Programar en Java es divertido y educativo";

    boolean containsText = text.contains("divertido");

    System.out.println("Does the text contain the word \"divertido\"? " + containsText);

    String textModified = text.replace("educativo", "alucinante");

    System.out.println("Modified text: " + textModified);

    System.out.println("Length of the text: " + text.length());

    System.out.println("Shortened text: " + text.substring(0,17));

  }
}