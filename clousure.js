//factory function

// function xyz(name, age) {
//   return {
//     name: name,
//     age: age,
//     fun: function () {
//       console.log(name, age);
//     },
//   };
// }

// let res = xyz("ramya", 24);
// res.fun();

// let res1 = xyz("rachana", 24);
// res1.fun();

// clousures

// function xyz() {
//   var a = 10;
//   function abc() {
//     console.log(a);
//   }
//   abc();
// }
// xyz();

// currying

// function Mul(a) {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// }
// let res = Mul(1)(5)(4);
// console.log(res);

// constructor function

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.firstName);
