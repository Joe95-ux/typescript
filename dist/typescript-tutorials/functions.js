"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(n) {
    return n + 2;
}
addTwo(5);
//declaring type of value that will be returned
const heroes = ['spiderman', 'ironman', 'thor'];
heroes.map((hero) => {
    return `hero is ${hero}`;
});
// use void type if function isnt returning anything
function consoleError(errmsg) {
    console.log(errmsg);
}
// some functions never return a value
function handleError(errmsg) {
    throw new Error(errmsg);
}
