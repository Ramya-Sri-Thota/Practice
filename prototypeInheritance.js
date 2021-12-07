// var person = function () {
//   this.a = 10;
// };
// person.prototype.b = 20;
// var student = function () {
//   this.c = 50;
// };
// student.prototype = Object.create(person.prototype);
// let student1 = new student();
// console.log(student1.b);

// let promise = new Promise((resolve, reject) => {
//   let a = 10;
//   if (a % 2 === 0) {
//     resolve("success");
//   } else {
//     reject("failure");
//   }
// });
// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// var Person = function () {
//   this.a = 10;
// };
// Person.prototype.b = 20;
// var Student = function () {
//   Person.call(this);jm
//   this.c = 50;
// };
// Student.prototype = Object.create(Person.prototype);
// let student1 = new Student();
// console.log(student1.a);

// setInterval(() => {
//   console.log("rachana");
// }, 2000);
