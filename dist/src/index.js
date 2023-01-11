"use strict";
// classes in typescript
class Student {
    constructor(email, name) {
        this.city = "Yaounde";
        this.sshKey = "2245";
        this.email = email;
        this.name = name;
    }
}
const tabi = new Student("Joe@gmail.com", "Joe");
//tabi.city = "Douala" //this wont work because the property is a readonly
//private mode makes variable inaccesible out of the class
//public and private keywords are access modifiers
// Getters and setters in typescript
class Member {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Yaounde";
    }
    get getEmail() {
        return `your email is ${this.email}`;
    }
    get CourseCount() {
        return this._courseCount;
    }
    // no return type in setters
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNum;
    }
    // private methods
    deleteToken() {
        console.log("token deleted");
    }
}
