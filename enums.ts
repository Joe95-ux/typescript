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


// Numeric Enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
 
}

export {};