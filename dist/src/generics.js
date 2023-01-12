"use strict";
/*
  * the identity function is a function that will return back anything that is passed in
  * without generics, we would either have to give the identity function a
  * specific type.
*/
function identity(arg) {
    return arg;
}
// or we could define the identity fiunction using the any type
function identityOne(arg) {
    return arg;
}
// But to make it more generic, we ensure that the type passed in is what is returned
// we can do this using <Type>
function identityThree(val) {
    return val;
}
function getSearchResults(results) {
    // do some database operations
    const myIndex = 3;
    return results[3];
}
// arrow function for the above function
const getSearchProducts = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[3];
};
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
