"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        return `I am ${this.name}`;
    }
    tellMyAge() {
        return `I am ${this.age} years old`;
    }
}
const person = new Person("John", 40);
const person1 = new Person("Mary", 35);
console.log(person.tellMyName(), person.tellMyAge());
console.log(person1.tellMyName(), person1.tellMyAge());
