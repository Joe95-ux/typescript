"use strict";
/*
 * Enums are one of the few features TypeScript has which is not a type-level
 * extension of JavaScript.
 * Enums allow a developer to define a set of named constants.
 * Using enums can make it easier to document intent, or create a set of distinct cases.
 * TypeScript provides both numeric and string-based enums.
 * Numeric enums
 * We’ll first start off with numeric enums, which are probably more familiar if you’re coming from other languages.
 * An enum can be defined using the enum keyword.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Numeric Enums
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }
var UseResponse;
(function (UseResponse) {
    UseResponse[UseResponse["No"] = 0] = "No";
    UseResponse[UseResponse["Yes"] = 1] = "Yes";
})(UseResponse || (UseResponse = {}));
function respond(recipient, message) {
    // ...
}
respond("Princess Caroll", UseResponse.Yes);
/*
* The short story is, enums without initializers either need to be first,
* or have to come after numeric enums initialized with numeric constants or
* other constant enum members. In other words, the following isn’t allowed:
*/
// below enum declaration is not allowed
// enum E {
//     A = getSomeValue(),
//     B,
//   }
// String Enums
/*
* String enums are a similar concept, but have some subtle runtime
* differences as documented below. In a string enum, each member has to be
* constant-initialized with a string literal, or with another string enum member.
*/
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
