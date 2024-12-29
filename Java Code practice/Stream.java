import java.util.*;
import java.util.stream.Collectors;


public class Stream {

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 7, 8, 12, 7, 4, 2, 21};

        int maxNum = Arrays.stream(nums)
                    .max()
                    .orElseThrow(() -> new IllegalArgumentException("Empty Array"));

                    // Arrays.stream(nums).forEach(System.out::print);
                    String result = Arrays.stream(nums).mapToObj(String::valueOf)
                            .collect(Collectors.joining(" ", "[","]"));
                    System.err.println(result);
                    System.out.println(maxNum);
    }

}