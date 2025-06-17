public class StringsT {
  public static void main(String args[]) {
    String firstName = "Harry";
    String lastName = "Grow";
    String email = "harry.grow@example.com";

    // Computing username from firstName and lastName
    String username = firstName.toLowerCase() + " " + lastName.toLowerCase();
    System.out.println("'username' after conversion and concatenation: " + username);

    // Replacing example.com with gmail.com in email
    email = email.replace("example.com", "gmail.com");
    System.out.println("'email' after replacing example.com with gmail.com: " + email);

    // Find the index of @ in the email address
    System.out.println("index of @ in the email address is: " + email.indexOf('@'));
  }
}