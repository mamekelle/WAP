/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, CheckingAccount, Ban, */
"use strict";

class CheckingAccount extends Account {
    constructor(account, overDraft) {
        super(account.getNumber());
        this.account = account;
        this.overDraft = overDraft;
    }

    getOverDraft() {
        return this.overDraft;
    }

    setOverDraft(overDraft) {
        this.overDraft = overDraft;
    }

    withDraw(amount) {
        if (this.account.getBalance() - amount > this.getOverDraft()) {
            this.account._balance = this.account.getBalance() - amount;
        }
        return this.account.getBalance();
    }

    endOfMonth() {
        return "Warning, low balance CheckingAccount " + this.account.getNumber() + " : balance: "
            + this.account.getBalance() + "overdraft limit: " + this.getOverDraft();
    }

    toString() {
        return "Checking Account " + this.account.getNumber() + ": balance :" +
            this.account.getBalance() + ": overdraft amount " + this.getOverDraft();
    }
}
