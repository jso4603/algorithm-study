import java.util.Scanner;

public class Test06_1001 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = scanner.nextInt();
        int b = scanner.nextInt();

        System.out.println(a - b);

        scanner.close();
    }
}