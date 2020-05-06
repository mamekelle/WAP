/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank, CheckingAccount */
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
            this.account.withDraw(amount);
        }
    }
    endOfMonth(){
        return "Warning, low balance CheckingAccount "+ this.account.getNumber() +" : balance: "
            + this.account.getBalance() +"overdraft limit: "+this.overDraft();
    }

    toString() {
        return "Checking Account " + this.account.getNumber() + ": balance :" +
            this.account.getBalance() + ": overdraft amount " + this.getOverDraft();
    }
}

