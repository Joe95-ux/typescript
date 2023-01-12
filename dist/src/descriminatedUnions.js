"use strict";
/**
 * When every type in a union contains a common property with literal
 * types, TypeScript considers that to be a discriminated union, and
 * can narrow out the members of the union.
 *
 */
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        // return shape.side * shape.side;
    }
}
// exhaustive checking and never type
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
