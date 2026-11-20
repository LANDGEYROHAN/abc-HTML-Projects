import java.util.Scanner;

public class matrix {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Enter rows and columns of the first matrix:");
        int row1 = s.nextInt();
        int col1 = s.nextInt();

        System.out.println("Enter rows and columns of the second matrix:");
        int row2 = s.nextInt();
        int col2 = s.nextInt();

        if (row1 <= 0 || col1 <= 0 || row2 <= 0 || col2 <= 0) {
            System.out.println("Rows and columns must be positive.");
            s.close();
            return;
        }

        if (col1 != row2) {
            System.out.println("Matrix multiplication is not possible.");
            s.close();
            return;
        }

        int[][] a = new int[row1][col1];
        int[][] b = new int[row2][col2];
        int[][] c = new int[row1][col2];

        System.out.println("Enter values for matrix A:");
        for (int i = 0; i < row1; i++) {
            for (int j = 0; j < col1; j++) {
                a[i][j] = s.nextInt();
            }
        }

        System.out.println("Enter values for matrix B:");
        for (int i = 0; i < row2; i++) {
            for (int j = 0; j < col2; j++) {
                b[i][j] = s.nextInt();
            }
        }

        for (int i = 0; i < row1; i++) {
            for (int j = 0; j < col2; j++) {
                for (int k = 0; k < col1; k++) {
                    c[i][j] += a[i][k] * b[k][j];
                }
            }
        }

        System.out.println("Matrix multiplication is:");
        for (int i = 0; i < row1; i++) {
            for (int j = 0; j < col2; j++) {
                System.out.print(c[i][j] + " ");
            }
            System.out.println();
        }

        s.close();
    }
}
