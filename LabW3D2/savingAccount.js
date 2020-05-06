/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank, CheckingAccount */
"use strict";

class SavingAccount extends Account {
    constructor(account, interest) {
        super(account.getNumber());
        this.account = account;
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }

    setInterest(interest) {
        this.interest = interest;
    }

    addInterest() {
        return this.account.getBalance() * this.interest / 10;
    }

    endOfMonth(){
        return "Interest added SavingsAccount "+ this.account.getNumber() +" : balance: "
            + this.account.getBalance() +"interest: "+this.addInterest();
    }

    toString() {
        return "Saving Account " + this.account.getNumber() + ": balance :"
            + this.account.getBalance() + " interest: " + this.addInterest();
    }

}
/*
let account = new Account(90000);
account.deposit(100);
console.log(account.toString());

let saving = new SavingAccount(account, 20);
saving.setInterest(20);
console.log("A " + saving.getInterest());
console.log("B " + `${saving.toString()}`);*/

