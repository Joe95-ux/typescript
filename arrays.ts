// define the array type

const heroes: string[] = [];

heroes.push("Seperman") // [superman]

const numbers: number[] = [];
// could also be written as
const someNumbers: Array<number> = []
numbers.push(2) // [2] because its an array of numbers

// we can also have an array of numbers inside an array

const mlModel: number[][] = [
    [255, 255, 255]
]

type User = {
    name:string;
    isActive:boolean
}

const allUsers: User[] = []