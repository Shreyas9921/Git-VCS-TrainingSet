import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class JavaObjectSorting {
       /**
     * This class shows how to sort primitive arrays, 
     * Wrapper classes Object Arrays
     * @param args
     */ 

  public static void main(String[] args) {
            //sort primitives array like int array

    int[] arr = new int[] {5, 7, 4, 2, 0};
    Arrays.sort(arr);
    System.out.println(Arrays.toString(arr));

            //sorting String array
            String[] strArr = {"A", "C", "B", "Z", "E"};
            Arrays.sort(strArr);
            System.out.println(Arrays.toString(strArr));

                    //sorting list of objects of Wrapper classes
        List<String> strList = new ArrayList<String>();
        strList.add("A");
        strList.add("C");
        strList.add("B");
        strList.add("Z");
        strList.add("E");
        Collections.sort(strList);
        for(String str: strList) System.out.print(" "+str);

  }

}
