public class AccessCheck {
  public static void main (String[] args) {

    boolean isPrremiumMember = false;

    boolean isAdmin = true;

    System.out.println("Access granted: " + (isPrremiumMember || isAdmin));

  }
}
