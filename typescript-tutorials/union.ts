// using two or more types
let score: number | string = 55;
score = "44" // also works since score could also be of type string

type Client = {
    name: string;
    id:number
}

type Admin = {
    userName : string;
    id:number
}

let jorex: Client | Admin = {name:'Jorex', id:12} // type Client is allowed

jorex = {userName:'Jorex', id:45} // type Admin is also acceptable

// performing checks before you apply type specific methods

function getDBId(id: number | string){
    if(typeof id === 'string'){
        id.toLocaleLowerCase()
    }
}

// mixed type array
const data:(string | number | boolean)[] = [1, 2, 3, '4', true];