/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, CheckingAccount, Bank */
"use strict";
describe("Account class operations", function () {
    let account = null;
    beforeEach(function () {
        account = new Account(123);
        account.deposit(200);
    });
    describe("Account Operations", function () {
        it("Should return account number", function () {
            assert.equal(account.getNumber(), 123);
        });
        it("Should return account balance after deposit", function () {
            assert.equal(account.getBalance(), 200);
        });
        it("Should return account balance after withdraw", function () {
            account.withdraw(20);
            assert.equal(account.getBalance(), 180);
        });
        it("Should return account end of month report", function () {
            assert.equal(account.endOfMonth(), " ");
        });
    });
});
describe("Saving Account class operations", function () {
    let savingAccount = null;
    beforeEach(function () {
        let account = new Account(90000);
        account.deposit(200);
        savingAccount = new SavingAccount(account, 20);
    });
    describe("Saving Operations", function () {
        it("Should return interest amount", function () {
            assert.equal(savingAccount.getInterest(), 20);
        });
        it("Should add the given interest amount", function () {
            assert.equal(savingAccount.addInterest(), 400);
        });
        it("Should return the savingAccount end of month report", function () {
            assert.equal(savingAccount.endOfMonth(), "Interest added SavingsAccount 90000 : balance: 200 interest: 400");
        });
    });
});

describe("Checking Account class operations", function () {
    let checkingAccount = null;
    beforeEach(function () {
        let account = new Account(90000);
        checkingAccount=new CheckingAccount(account,-200);
        account.deposit(200);

    });
    describe("Checking Operations", function () {
        it("Should check overdraft amount", function () {
            assert.equal(checkingAccount.getOverDraft(), -200);
        });
        it("Should override the account withdraw class", function () {
            assert.equal(checkingAccount.withDraw(100), 100);
        });
        it("Should return the checkingAccount end of month report", function () {
            assert.equal(checkingAccount.endOfMonth(), "Warning, low balance CheckingAccount 90000 : balance: 200overdraft limit: -200");
        });
    });
});

describe("Bank class operations with normal account", function () {
    let bank = null;
    beforeEach(function () {
        let account = new Account(90000);
        let account1 = new Account(90001);
        let account2 = new Account(90002);
        let savingAccount = new SavingAccount(account, 10);
        let savingAccount1 = new SavingAccount(account1,20);
        let checkingAccount = new CheckingAccount(account, 10);
        let checkingAccount1 = new CheckingAccount(account1,20);
        bank =new Bank();

        bank.addAccounts(account);
        bank.addAccounts(account1);
        bank.addAccounts(account2);
        bank.closeAccount(account1.getNumber());

        bank.addSavingAccounts(savingAccount);
        bank.addSavingAccounts(savingAccount1);
        bank.closeSavingAccount(account1.getNumber());

        bank.addCheckingAccounts(checkingAccount);
        bank.addCheckingAccounts(checkingAccount1);
        bank.closeCheckingAccount(account1.getNumber());

    });
    describe("Bank Operations", function () {
        it("Should add and close account from accounts array", function () {
            assert.equal(bank.accounts.length, 2);
        });
        it("Should add and close account from saving accounts array", function () {
            assert.equal(bank.savingAccounts.length, 1);
        });
        it("Should add and close account from checking accounts array", function () {
            assert.equal(bank.checkingAccounts.length, 1);
        });
    });
});
