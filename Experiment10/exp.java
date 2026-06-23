// Abstract Class
abstract class BankAccount {

    // Encapsulation - Private Data Members
    private int accountNumber;
    private String accountHolderName;
    private double balance;

    // Constructor
    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getters
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    // Setter
    public void setBalance(double balance) {
        this.balance = balance;
    }

    // Deposit Method
    public void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
            System.out.println("Amount Deposited: ₹" + amount);
        } else {
            System.out.println("Invalid Deposit Amount!");
        }
    }

    // Withdraw Method
    public void withdraw(double amount) {
        if(amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Amount Withdrawn: ₹" + amount);
        } else {
            System.out.println("Insufficient Balance!");
        }
    }

    // Display Account Details
    public void displayDetails() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : ₹" + balance);
    }

    // Abstract Method
    abstract void calculateInterest();
}

// Savings Account Class
class SavingsAccount extends BankAccount {

    private static final double INTEREST_RATE = 0.05;

    public SavingsAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {

        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {

        double interest =
                getBalance() * INTEREST_RATE;

        System.out.println(
                "Savings Account Interest (5%): ₹"
                        + interest);
    }
}

// Current Account Class
class CurrentAccount extends BankAccount {

    private static final double INTEREST_RATE = 0.02;

    public CurrentAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {

        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {

        double interest =
                getBalance() * INTEREST_RATE;

        System.out.println(
                "Current Account Interest (2%): ₹"
                        + interest);
    }
}

// Main Class
public class Exp10 {

    public static void main(String[] args) {

        // Creating Objects
        SavingsAccount sa =
                new SavingsAccount(
                        101,
                        "Rahul Sharma",
                        10000
                );

        CurrentAccount ca =
                new CurrentAccount(
                        102,
                        "Anita Verma",
                        20000
                );

        System.out.println("================================");
        System.out.println("      SAVINGS ACCOUNT");
        System.out.println("================================");

        sa.deposit(2000);
        sa.withdraw(1000);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println();

        System.out.println("================================");
        System.out.println("      CURRENT ACCOUNT");
        System.out.println("================================");

        ca.deposit(3000);
        ca.withdraw(2000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}