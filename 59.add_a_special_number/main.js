"use strict";
function createAdder(customNumber) {
    return function adder(number) {
        return customNumber + number;
    };
}
let myAdder = createAdder(6);
console.log(myAdder(30));
