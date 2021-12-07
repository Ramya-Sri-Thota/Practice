// console.log("ramya rachana");
// document.write("ramya rachana");

// var a = 10;
// let b = 20;
// const pi = 3.14;

// console.log("value of a is", a,b,pi);

// var a = 10;
// var a = 20;

// console.log(a);

// let a = 10;
// a = 20;

// const a = 20;
// console.log(a);

// var x = 5;
// var y = x+5;
// console.log(y);

// let  x = 10;
// // Here x is 10

// {
// let x = 2;
// console.log(x);
// // Here x is 2
// }

// console.log(x);

//prime numbers
// function prime(n) {
//   if (n == 1) {
//     return false;
//   } else if (n == 2) {
//     return true;
//   } else {
//     for (var i = 2; i < n; i++) {
//       if (n % i == 0) {
//         return false;
//       }
//       return true;
//     }
//   }
// }
// console.log(prime(7));

function fibonecci(n) {
  var n1 = 0;
  var n2 = 1;
  var sum;
  for (i = 0; i < n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return n2;
}
console.log(fibonecci(7));
