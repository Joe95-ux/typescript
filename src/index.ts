// classes in typescript

class Student {
    email:string
    name: string
    readonly city: string = "Yaounde"
    private sshKey: string = "2245"
    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
}

const tabi = new Student("Joe@gmail.com", "Joe");
//tabi.city = "Douala" //this wont work because the property is a readonly
//private mode makes variable inaccesible out of the class
//public and private keywords are access modifiers

// Getters and setters in typescript

class Member{
    private _courseCount = 1
    protected courseModule = 3
    // protected variable are accessible in parent and children classes
    readonly city:string = "Yaounde";
    constructor(public email:string, public name: string){

    }

    get getEmail():string{
        return `your email is ${this.email}`;
    }

    get CourseCount(): number{
        return this._courseCount;
    }
    // no return type in setters
    set courseCount(courseNum: number){
        if(courseNum <=1){
            throw new Error ("Course count should be more than one")
        }
        this._courseCount = courseNum;
    }

    // private methods
    private deleteToken(){
        console.log("token deleted");
    }

}

class BranchMember extends Member{
       isFamily: boolean = true
       changeCourseModule(){
        this.courseModule = 3;

       }

}

