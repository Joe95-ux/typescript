"use strict";
// using two or more types
let score = 55;
score = "44"; // also works since score could also be of type string
let jorex = { name: 'Jorex', id: 12 }; // type Client is allowed
jorex = { userName: 'Jorex', id: 45 }; // type Admin is also acceptable
// performing checks before you apply type specific methods
function getDBId(id) {
    if (typeof id === 'string') {
        id.toLocaleLowerCase();
    }
}
// mixed type array
const data = [1, 2, 3, '4', true];
