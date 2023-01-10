function addTwo(n: number){
    return n+2;
}

addTwo(5);

//declaring type of value that will be returned
 const heroes = ['spiderman', 'ironman', 'thor'];

 heroes.map((hero): string =>{
    return `hero is ${hero}`;

 });

 // use void type if function isnt returning anything
 function consoleError(errmsg: string): void{
    console.log(errmsg);
 }

 // some functions never return a value
 function handleError(errmsg: string): never{
    throw new Error(errmsg);
 }

 export {};