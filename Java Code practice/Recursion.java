class Recursion {
    public static void main(String[] args) {
        int n = 5;
        int result = factorial(n);
        System.out.println(result);
    }

    private static int factorial(int n) {
        if(n <= 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }
}