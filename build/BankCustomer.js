"use strict";
// import assert from "assert";
class BankCustomer {
    constructor(name, pin) {
        this.name = name;
        this.pin = pin;
        this.name = name;
        this.pin = pin;
    }
    getName() {
        return this.name;
    }
    verifyPinInput(pin) {
        return pin === this.pin;
    }
}
const assert = require("assert");
const customer = new BankCustomer("John Doe", "3579");
assert.equal(typeof customer.getName, "function");
assert.equal(typeof customer.verifyPinInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyPinInput("3579"));
