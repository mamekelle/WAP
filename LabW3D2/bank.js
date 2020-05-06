/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, CheckingAccount , Bank*/
"use strict";

class Bank {
    constructor() {
        this.accounts = [];
        this.checkingAccounts = [];
        this.savingAccounts = [];
    }

    addAccounts(account) {
        this.accounts.push(account);
    }

    addCheckingAccounts(account, overDraft) {
        let checkingAccount = new CheckingAccount(account, overDraft);
        checkingAccount.setOverDraft(overDraft);
        this.checkingAccounts.push(checkingAccount);
        console.log("addCheckingAccounts " + account.toString());
        return account.getNumber();
    }

    addSavingAccounts(account, interest) {
        let savingsAccount = new SavingAccount(account, interest);
        savingsAccount.setInterest(interest);
        this.savingAccounts.push(savingsAccount);
        console.log("addSavingAccounts " + savingsAccount.toString());
        return account.getNumber();
    }


    closeAccount(number) {
        this.accounts = this.accounts.filter(a => a.getNumber() !== number);
        return this.accounts.length;
    }

    closeSavingAccount(number) {
        this.savingAccounts = this.savingAccounts.filter(a => a.getNumber() !== number);
        return this.savingAccounts.length;
    }

    closeCheckingAccount(number) {
        this.checkingAccounts = this.checkingAccounts.filter(a => a.getNumber() !== number);
        return this.checkingAccounts.length;
    }
}

let bank = new Bank();
const account = new Account(1);
const account1 = new Account(11);
const account2 = new Account(22);

bank.addAccounts(account);
bank.addAccounts(account1);
bank.addAccounts(account2);

console.log("length B " + bank.accounts.length);
console.log(account1.toString());
bank.closeAccount(22);
console.log("length A " + bank.accounts.length);


let savingsAccount = bank.addSavingAccounts(account, 200);
let addCheckingAccounts = bank.addCheckingAccounts(account1, 200);

console.log("AA " + savingsAccount.toString());
console.log("BB " + addCheckingAccounts.toString());


