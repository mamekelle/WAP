/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank, CheckingAccount */
"use strict";
describe("Functional operation on array", function () {
    let account = null;
    beforeEach(function () {
        account = new Account(123);
    });
    describe("Bank Operations", function () {
        it("Should create account", function () {
            assert.equal(account.getNumber(), 123);
        });
    });
});
