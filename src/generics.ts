/*
  * the identity function is a function that will return back anything that is passed in
  * without generics, we would either have to give the identity function a
  * specific type.
*/

function identity(arg:number): number{
    return arg;
}

// or we could define the identity fiunction using the any type
function identityOne(arg:any): any{
    return arg;
}

// But to make it more generic, we ensure that the type passed in is what is returned
// we can do this using <Type>

function identityThree<Type>(val: Type): Type{
    return val;
}

function getSearchResults<T>(results: T[]): T{
    // do some database operations
    const myIndex = 3;
    return results[3];
}

// arrow function for the above function
const getSearchProducts = <T>(products: T[]): T =>{
    // do some database operations
    const myIndex = 3;
    return products[3];
}

function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }

// generics in classes

interface Quize{
    name: string;
    type: string
}

interface Course{
    name: string;
    author: string;
    subject: string;
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product)
    }
}

