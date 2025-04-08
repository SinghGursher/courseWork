import java.util.Scanner;

public class ShapeAreaCalculator {

    public static double circleArea(double radius) {
        return Math.PI * radius * radius;
    }

    public static double triangleArea(double base, double height) {
        return 0.5 * base * height;
    }

    public static double rectArea(double length, double width) {
        return length * width;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose a shape (circle, triangle, rectangle):");
        String shape = scanner.nextLine().trim().toLowerCase();

        double area = 0;
        boolean validShape = true;

        switch (shape) {
            case "circle":
                System.out.print("Enter the radius: ");
                double radius = scanner.nextDouble();
                area = circleArea(radius);
                break;

            case "triangle":
                System.out.print("Enter the base: ");
                double base = scanner.nextDouble();
                System.out.print("Enter the height: ");
                double height = scanner.nextDouble();
                area = triangleArea(base, height);
                break;

            case "rectangle":
                System.out.print("Enter the length: ");
                double length = scanner.nextDouble();
                System.out.print("Enter the width: ");
                double width = scanner.nextDouble();
                area = rectArea(length, width);
                break;

            default:
                System.out.println("Invalid shape.");
                validShape = false;
                break;
        }
        if (validShape) {
            System.out.printf("Area of your %s is: %.2f%n", shape, area);
        }

        scanner.close();
    }
}





