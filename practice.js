// const obt = {
//   name: "ramya",
//   age: 24,
// };
// console.log(obt.name);
// let arr = [5, 8, 7, 9, 2, 6];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < 7) {
//     console.log(arr[i]);
//   }
// }
// dublicate arrays
// let arr = [1, 2, 3, 4, 4, 3, 7, 9, 2];
// let arr1 = [];
// for (i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !arr1.includes(arr[i])) {
//       arr1.push(arr[i]);
//     }
//   }
// }
// console.log(arr1);
// let num = arr.filter((val) => !arr1.includes(val));
// console.log(num);

// let a = function abc() {
//   console.log("ramya");
// };
// a();
// (function () {
//   console.log("ramya");
// })();

// let a = function () {
//   console.log("ramya");
// };
// a();

// let a = () => {
//   console.log("haiiii");
// };
// a();
// function num(a, b) {
//   let x = a + b;
//   console.log(x);
// }
// num(2, 3);
// function xyz() {
//   var a = 10;
//   function abc() {
//     console.log(a);
//   }
//   abc();
// }
// xyz();
// creating object with object literal
// let obj = { name: "ramya", age: 24 };
// console.log(obj.age);
// obj.city = "hyd";
// obj["area"] = "kphb";
// console.log(obj);
// console.log(obj["city"]);

//using new keyword

// const obj1 = new Ramya();

// obj1.name = "ramya";
// obj1["age"] = 24;

// console.log(obj1);
// console.log(obj1.age);

// Object constructor

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person = new Person("ramya", 24);
// console.log(person);

// Person.prototype.nationality = "indian";
// //console.log(person);
// console.log(person.nationality);

// Person.prototype.displayName = function () {
//   console.log(this.name);
// };

// person.displayName();

// object.create

// let obj = { name: "ramya", age: 24 };

// let obj1 = { ...obj };
// obj1.city = "hyd";

// console.log(obj1);
// console.log(obj);

// // shallow copy

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     country: "USA",
//   },
// };

// let person1 = { ...person };

// person1.firstName = "ramya";
// person1.address.city = "hyd";
// person1.hno = "6-1";

// console.log(person1);
// console.log(person);

// let arr = [1, 3, 5, 7, 8];

// // // let arr1 = [...arr];
// // // arr1.push(1);

// // // console.log(arr);
// // // console.log(arr1);

// let [a, b, ...rest] = [...arr]; // array destructuring
// console.log(a);
// console.log(b);
// console.log(rest);

// function xyz() {
//   var x = 10;
//   function abc() {
//     console.log(x);
//     abc();
//   }
//   xyz();
// }

// object literal

// let obj = { name: "ramya", age: 24 };
// console.log(obj.name);
// obj.area = "hyd";
// obj["color"] = "white";
// console.log(obj);
///////////////////////////

// let obj = new Object();
// obj.name = "ramya";
// obj["age"] = 24;
// console.log(obj);
// function abc(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const x = new abc("ramya", 24);
// console.log(x.name);
// abc.prototype.gender = "female";
// let y = abc.prototype.gender;
// y = "female";
// console.log(y);

// function abc(first, last, age, clr) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.clr = clr;
// }
// let myfather = new abc("srinu", "thota", "55", "black");
// console.log(myfather.firstname);
// abc.prototype.area = "hyd";
// console.log(myfather.area);

// function mul(a) {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// }
// let res = mul(1)(4)(8);
// console.log(res);

// function abc(nama,age)
//     },
//   };
// }
// let res = abc("ramya", 24);
// res.fun();
// let res1 = abc("rachana", 22);
// res1.fun();

//call & apply

// function abc(name, age) {
//   return name + age + this.city;
// }
// let x = {
//   city: "hyd",
// };
// console.log(abc.apply(x, ["ramya" + "  " + 24]));
////////////////

// passing arguments

//function abc(name, age) {
//console.log(name, age);
//}
//abc("ramya", 24);

// let obj = { name: "bhargav", age: 26 };

// obj.area = "hyd";
// obj["city"] = "mumbai";
// console.log(obj);

// let arr = [1, 2, 3, 7, 8, 9, 0, 7, 3, 2];
// let arr1 = [...new Set(arr)];
// console.log(arr1);

// function exm(...rest) {
//   console.log(...rest);
// }
// exm(1, 2, 3, 4, 5, 6);
