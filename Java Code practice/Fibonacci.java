import java.util.HashMap;
import java.util.Map;

// public class Fibonacci {
//     public static void main(String[] args) {
//         Map<Integer, Integer> memo = new HashMap<>();
//         int result = fibonacci_seq(10, memo);
        
//         for (int i = 0; i <= 10; i++) {
//             System.out.print(memo.get(i) + " ");
//         }
//     }

//     private static int fibonacci_seq(int n, Map<Integer, Integer> memo) {
//         if(memo.containsKey(n)) {
//             return memo.get(n);
//         }

//         if(n <= 1) {
//             return n;
//         }

//         int result = fibonacci_seq(n-1, memo) + fibonacci_seq(n-2, memo);
//         memo.put(n, result);

//         return result;
//     }
// }

public class Fibonacci {
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        int n = 10; // Example input
        for (int i = 0; i <= n; i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }
}
