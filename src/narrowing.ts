// This is all about rightly checking an arg type before implementing a certain
// logic incase we aren't sure what the exact arg type might be

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// Typescriptlooks at these special checks (called type guards) and
// assignments, and the process of refining types to more specific types than declared is called narrowing.

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// downside of above function is that we have not handled the empty string case

// The in operator narrowing
/*
 * JavaScript has an operator for determining if an object has a property with a name: the in
 * operator. TypeScript takes this into account as a way to narrow down potential types.
 * 

*/

type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

interface Student{
    name: string;
    email: string;
}

interface StudentAdmin{
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(student: Student | StudentAdmin){
    if("isAdmin" in student){
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

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());         
    } else {
      console.log(x.toUpperCase());          
    }
}

// Using type predicates

/*
  * To define a user-defined type guard, we simply need to define a function
  * whose return type is a type predicate:
  * pet is Fish is our type predicate in this example.
  * A predicate takes the form parameterName is Type, where parameterName
  * must be the name of a parameter from the current function signature.
*/

type LFish = {swim: ()=> void};
type LBird = {fly: ()=> void};

function isFish(pet: LFish | LBird): pet is LFish{
    return (pet as LFish).swim !== undefined;
}

/*
 * Any time isFish is called with some variable, TypeScript will narrow 
 * that variable to that specific type if the original type is compatible.
*/

function getFood(pet: LFish | LBird){
    if(isFish(pet)){
        pet
        return "Fish food";
    }else{
        pet
        return "Bird food"
    }
}
