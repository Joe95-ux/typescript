// In JavaScript, the fundamental way that we
// group and pass around data is through objects.
// In TypeScript, we represent those through object types.
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

// or they can be named by using either an interface
interface Person {
  name: string;
  age: number;
}

function greetMe(person: Person) {
  return `Hello ${person.name}`;
}

greetMe({name:"Adam", age:12});

// type alias
type mPerson = {
  name: string;
  age: number;
};

function greetThem(person: mPerson) {
  return "Hello " + person.name;
}

//incase our function returns an object of a type
function greetAll(person: mPerson): mPerson{
    return {name: person.name, age:person.age};
}

greetAll({name:"Ayush", age:16});

//we can mark those properties as optional by adding a question mark (?) to the end of their names.
interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}
function paintShape(opts: PaintOptions) {
  // ...
}

paintShape({ shape:"round" });
paintShape({ shape:"trapezoidal", xPos: 100 });
paintShape({ shape:"cylyndrical", yPos: 100 });
paintShape({ shape:"spherical", xPos: 100, yPos: 100 });


// using readonly(immutable), optional properties
type User = {
    readonly _id: string;
    name:string;
    email:string;
    cardnum?: string
}

let myUser: User = {
    _id:"sssa",
    name:"sya",
    email:'sya@gmail.com',
}

myUser.name = "Credence"  // possible or allowed
// myUser._id = "ffsa#" // not allowed because this property is a readOnly

// mix and match.
// create a type from other types
type CardNumber = {
    cardnumber: string
}

type CardDate = {
    carddate:string
}

type CardDetails = CardNumber & CardDate & {
    cvv:number
}


export {};
