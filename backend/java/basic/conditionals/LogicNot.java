public class LogicNot {
   public static void main(String[] args) {
       //marks between 1 and 100
       int marks = 75;

       if(! (marks <= 60)) {
           System.out.println("Pass.");
       } else {
           System.out.println("Fail.");
       }

   }
}