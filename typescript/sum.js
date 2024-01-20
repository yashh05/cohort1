"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hello " + this.name;
    }
}
const personX = new Person("yash", 22);
const greetings = personX.greet();
console.log(greetings);
