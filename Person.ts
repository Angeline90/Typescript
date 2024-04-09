class Person {
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName(): string {
    return `I am ${this.name}`;
  }

  tellMyAge(): string {
    return `I am ${this.age} years old`;
  }
}

const person = new Person("John", 40);
const person1 = new Person("Mary", 35);

console.log(person.tellMyName(), person.tellMyAge());
console.log(person1.tellMyName(), person1.tellMyAge());
