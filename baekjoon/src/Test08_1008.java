import java.util.Scanner;

public class Test08_1008 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double a = scanner.nextDouble();
        double b = scanner.nextDouble();

        System.out.println(a / b);

        scanner.close();
    }
}