import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Test11_2588 {
    public static void main(String[] args) throws IOException {


        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int firstRow = Integer.parseInt(bufferedReader.readLine());
        String secondRow = bufferedReader.readLine();

        char[] charArray = secondRow.toCharArray();

        int thirdRow = firstRow * (charArray[2] - '0');
        int fourthRow = firstRow * (charArray[1] - '0');
        int fifthRow = firstRow * (charArray[0] - '0');
        int sixthRow = firstRow * Integer.parseInt(secondRow);

        System.out.println(thirdRow);
        System.out.println(fourthRow);
        System.out.println(fifthRow);
        System.out.println(sixthRow);
    }
}
