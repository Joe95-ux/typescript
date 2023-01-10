"use strict";
exports.__esModule = true;
// In JavaScript, the fundamental way that we
// group and pass around data is through objects.
// In TypeScript, we represent those through object types.
function greet(person) {
    return "Hello " + person.name;
}
function greetMe(person) {
    return "Hello ".concat(person.name);
}
greetMe({ name: "Adam", age: 12 });
function greetThem(person) {
    return "Hello " + person.name;
}
//incase our function returns an object of a type
function greetAll(person) {
    return { name: person.name, age: person.age };
}
greetAll({ name: "Ayush", age: 16 });
function paintShape(opts) {
    // ...
}
paintShape({ shape: "round" });
paintShape({ shape: "trapezoidal", xPos: 100 });
paintShape({ shape: "cylyndrical", yPos: 100 });
paintShape({ shape: "spherical", xPos: 100, yPos: 100 });
var myUser = {
    _id: "sssa",
    name: "sya",
    email: 'sya@gmail.com'
};
myUser.name = "Credence"; // possible or allowed
