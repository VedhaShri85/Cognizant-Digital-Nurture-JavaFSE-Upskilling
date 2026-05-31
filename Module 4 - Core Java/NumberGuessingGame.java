import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {

    public static void main(String[] args) {

        Random random = new Random();

        int secretNumber =
                random.nextInt(100) + 1;

        Scanner sc = new Scanner(System.in);

        int guess;

        do{

            System.out.print(
                    "Guess Number (1-100): ");

            guess = sc.nextInt();

            if(guess > secretNumber){

                System.out.println("Too High");

            }
            else if(guess < secretNumber){

                System.out.println("Too Low");

            }

        }while(guess != secretNumber);

        System.out.println(
                "Correct! You guessed it.");

        sc.close();

    }

}