"use strict";
// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.
var _a, _b;
const myHouse = {
    address: {
        city: "New York"
    }
};
console.log(myHouse.address.city);
// Expected Output: "New York"
const noCityHouse = {
    address: {}
};
console.log((_b = (_a = noCityHouse.address) === null || _a === void 0 ? void 0 : _a.city) !== null && _b !== void 0 ? _b : "City not available");
// Expected Output: "City not available"
