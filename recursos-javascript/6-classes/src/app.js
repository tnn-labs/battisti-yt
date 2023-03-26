// example 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show () {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('John', 25); 
const person2 = new Person('may', 29);
person1.show();
person2.show();

// example 2 - herança
class Employee extends Person {
  constructor (name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  showEmployee() {
    console.log(`My name is ${this.name} and I am ${this.age} years old and my salary is R$${this.salary}.`)
  }
}

const employee1 = new Employee('Peter', 34, 2300);
employee1.showEmployee();