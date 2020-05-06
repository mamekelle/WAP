/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank */
"use strict";

class Bank {
    constructor() {
        this.accounts = [];
        //  this.checkingAccounts=[];
        // this.savingAccounts=[];
    }

    addAccounts(account) {
        this.accounts.push(account);
    }

    addCheckingAccounts(account, overDraft) {
        let acc = this.accounts.find(a => a.getNumber() === account.getNumber());
        let checkingAccount = new CheckingAccount(account, overDraft);
        checkingAccount.setOverDraft(overDraft);
        console.log("AAA " + acc.toString());

        return acc.getNumber();
    }

    addSavingAccounts(account, interest) {
        let savingsAccount = new SavingAccount(account, interest);
        let acc = this.accounts.find(a => a.getNumber() === account.getNumber());
        savingsAccount.setInterest(interest);
        console.log("AAS " + acc.toString());

        return acc.getNumber();
    }


}

let bank = new Bank();
const account = new Account(1);
const account1 = new Account(33);

bank.addAccounts(account);
bank.addAccounts(account1);

console.log(bank.accounts.length);
console.log(account1.toString());


let savingsAccount = bank.addSavingAccounts(account, 200);
let addCheckingAccounts = bank.addCheckingAccounts(account1, 200);

console.log("AA " + savingsAccount.toString());
console.log("BB " + addCheckingAccounts.toString());


