// function fibonacci(num) {
//   var num1 = 0;
//   var num2 = 1;
//   var sum;
//   for (let i = 0; i < num; i++) {
//     sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
//   }
//   return num2;
// }
// console.log(fibonacci(8));

//prime numbers
// function prime(n) {
//   if (n === 1) {
//     return false;
//   } else if (n === 2) {
//     return true;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }
// console.log(prime(23))

// let arr = [12, 3, 15, 6, 7];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let arr = ["ramya", "rachana", "nagamani"];
// arr.map((val) => console.log(val.length));

// let a = 5 + "5" + "5" + 7;
// //output: 5557;
// let r = 2 + 3 + "4" + 5 * 5; //output:5425
// console.log(2 < 4 < 7);

let arr = [1, 2, 3, 4, 6, 8, 9, 7];
let evensum = 0;
let oddsum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evensum = evensum + arr[i];
  } else {
    oddsum = oddsum + arr[i];
  }
}
console.log(evensum);
