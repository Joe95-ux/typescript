/**
 * When every type in a union contains a common property with literal 
 * types, TypeScript considers that to be a discriminated union, and 
 * can narrow out the members of the union.
 * 
 */

interface Circle{
    kind: "circle";
    radius: number;
}

interface Square{
    kind: "square";
    side: number;
}

interface Rectangle{
    kind: "rectangle";
    length: number;
    width: number;

}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }else{
        // return shape.side * shape.side;
    }

}

// exhaustive checking and never type

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2   
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}