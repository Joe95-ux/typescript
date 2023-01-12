"use strict";
// This is all about rightly checking an arg type before implementing a certain
// logic incase we aren't sure what the exact arg type might be
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
// Typescriptlooks at these special checks (called type guards) and
// assignments, and the process of refining types to more specific types than declared is called narrowing.
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function isAdminAccount(student) {
    if ("isAdmin" in student) {
        return student.isAdmin;
    }
}
// Instance of Narrowing
/*
 * JavaScript has an operator for checking whether or
 * not a value is an “instance” of another value
 * As you might have guessed, instanceof is also a type guard,
 * and TypeScript narrows in branches guarded by instanceofs
*/
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
/*
 * Any time isFish is called with some variable, TypeScript will narrow
 * that variable to that specific type if the original type is compatible.
*/
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
