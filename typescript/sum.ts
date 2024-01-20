interface PersonInterface {
  name: string;
  age: number;
}

class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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
