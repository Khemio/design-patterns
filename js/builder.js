// For Objects with optional parameters, create a Builder object to simplify handling of optional parametres


class Address {
    constructor(zip, street) {
      this.zip = zip;
      this.street = street;
    }
  }

// No Builder

// class User {
//   constructor(name, age, phone , address) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address;
//   }
// }

// let user = new User('Bob');
// let user = new User('Bob', undefined, undefined, new Address(1, 'Main'));

 // Builder Pattern Classic
  
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name);
//   }

//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }

//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }

//   setAddress(address) {
//     this.user.address = address;
//     return this;
//   }

//   build() {
//     return this.user;
//   }
// }

// let user = new UserBuilder('Bob').setAge(10).setPhone(1234567890).build();


// Builder Pattern JS
  
class User {
  constructor(name, {age, phone = 1234567890, address} = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User('Bob', {age: 10, phone: 99999999, address: new Address(1, 'Main')});
console.log(user);