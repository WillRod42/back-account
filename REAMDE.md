Describe: deposit()

Test: "If given a negative number it should return false"
Code: deposit(-1);
Expected-Output: false

Test: "If given a non-negative number it should return true"
Code: deposit(1);
Expected-Output: true



Describe: withdraw()

Test: "If given a negative number it should return false"
Code: withdraw(-1);
Expected-Output: false

Test: "If given a non-negative number it should return true"
Code: withdraw(1);
Expected-Output: true

Test: "If given a non-negative number greater than the balance it should return true and balance should be zero"
Code:
let account = new BankAccount("test", 10);
withdraw(20);
Expected-Output: true