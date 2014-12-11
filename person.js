function Person(options) {
  this.firstName = options.firstName;
  this.lastName = options.lastName;
  this.getFullName = getFullName;
}

function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

function Client(person, options) {
  this.person = person;
  this.location = options.location;
  this.age = options.age;
}

var person = new Person({
  firstName: 'Kaique',
  lastName: 'Silva'
});

var client = new Client(person, {
  location: 'Rio de janeiro',
  age: 20
});

console.log(client.person.getFullName());
