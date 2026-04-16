let balance = 1000;
let choice = null;
let amount = null;
while(choice != 4){
    alert("----- ATM MENU -----\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit  ");
    choice = Number(prompt("Enter your choice: "))
    if (choice == 1){
        console.log(`Current balance is ${balance}`)
    }
    else if (choice == 2){
        amount = Number(prompt("Enter amount: "))
        if (amount > 0){
            balance = balance + amount;
            console.log("Amount Deposited")
            console.log(`Your current balance: ${balance}`);
        }
        else{
            console.log("Invalid Amount! ")
        }
    }
    else if (choice == 3){
        amount = Number(prompt("Enter amount: "))
        if (amount <= 0){
            console.log("Invalid amount")
        }
        else if (amount > balance){
            console.log("Insufficient Balance ❌")
        }
        else if(amount <= balance){
            balance = balance - amount;
            console.log("Withdrawal Successful")
            console.log(`Your current balance: ${balance}`)
        }
        
    }
    else if (choice == 4){
        console.log("Thank you for coming");
        break;
    }
    else{
        console.log("Invalid Choice")
    }

}