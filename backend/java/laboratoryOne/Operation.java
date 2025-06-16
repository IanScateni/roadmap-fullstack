public class Operation {
  public static void main (String[] args) {

    int player1Score = 75;
    int player2Score = 64;
    int player3Score = 23;
      
    System.out.println("Player 1 Score: " + player1Score);
    System.out.println("Player 2 Score: " + player2Score);
    System.out.println("Player 3 Score: " + player3Score);

    System.out.println("Total Score: " + (player1Score + player2Score + player3Score));

    System.out.println("Average Score: " + ((player1Score + player2Score + player3Score) / 3.0));

    System.out.println(player1Score < player2Score && player3Score > player2Score);

    System.out.println(player1Score > player2Score && player3Score < player1Score);

    System.out.println(player1Score > player2Score || player3Score > player1Score);

    System.out.println(player1Score < player2Score || player3Score > player1Score);
    
  }
}
