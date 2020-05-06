/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank */
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

    toString() {
        return "Checking Account " + this.account.getNumber() + ": balance :" +
            this.account.getBalance() + ": overdraft amount " + this.getOverDraft();
    }
}

