class Armstrong{

    public static boolean isArmstrong(Integer number) {
        Integer originalNumber = number;
        Integer digitCount = countDigit(number);
        int sum = 0;

        while(number != 0) {
            Integer digit = number % 10;
            sum += Math.pow(digit, digitCount);
            number /= 10;
        }

        return sum == originalNumber;
    }

    public static Integer countDigit(Integer number) {
        String strForDigitCount = Integer.toString(number);
        return strForDigitCount.length();
    }

    public static void main(String[] args) {
        Integer number = 370;
        boolean result = isArmstrong(number);

        if(result) {
            System.out.println("The number " + number + " armstring.");
        }
        else {
            System.out.println("The " + number + " is not a armstring number.");
        }
    }
}