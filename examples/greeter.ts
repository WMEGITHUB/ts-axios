class User {
  firstName: string;
  lastName: string;
  fullName: string;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;
  }

}

interface Person {
  firstName: string,
  lastName: string,
}

function greeter(person: Person) {
  return 'hello' + person.firstName + ' ' + person.lastName;
}

let a = new User('wang', 'sy');

console.log(greeter(a));