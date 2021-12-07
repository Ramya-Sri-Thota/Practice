//splice

let arr = [2, 6, 9, 1, 5, 8];
let arr1 = arr.splice(4, 5, 11, 5);
console.log(arr);

// // concat

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];

// const myChildren = arr1.concat(arr2);
// console.log(myChildren);

// slice

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const abc = fruits.slice(3);
// console.log(abc);

// sort

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// forEach

// let arr = ["Banana", "Orange", "Apple", "Mango"];

// let res = arr.filter((val) => {
//   if (val > 7) {
//     return val;
//   }
// });
// console.log(res);

// let res = arr.sort((a, b) => a.length - b.length);
// console.log(res);

// console.log(Array.isArray(arr));

// let arr = [1, 2, 3, 4, 5, 6, 6, 5, 7, 8, 3, 9];
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

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => console.log(val));
