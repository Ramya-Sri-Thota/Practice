// let arr = [1, 2, 3, 4, 5, 6, 9, 5, 4, 3, 2, 8, 7];
// let arr1 = [];
// for (i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !arr1.includes(arr[i])) {
//       arr1.push(arr[i]);
//     }
//   }
// }
// console.log(arr1);
// let res = arr.filter((val) => !arr1.includes(val));
// console.log(res);
// // let arr=[1,2,3,4];
// // let arr = [1, 2, 3, 4];
// // let sum = 0;
// // for (i = 1; i < arr.length; i++) {
// //   sum = sum + arr[i];
// // }
// // console.log(sum);
// Let arr=[1,2,3,4,2,5,6,5,4]
// let arr1=[];
// for(i=0;i<arr.length;i++){
// for(j=i+1;j<arr.length;j++){
// if(arr[i]==arr[j] && !arr1.includes(arr[i])){
// arr1.push(arr[i]);
// }
// }
// }
// console.log(arr1);
// let res=arr.filter((val)=> !arr1.includes(val));
// console.log(res);

//  sum of even number in Array

let arr = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];

let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenSum = evenSum + arr[i];
  } else {
    oddSum = oddSum + arr[i];
  }
}
console.log(evenSum);
console.log(oddSum);
console.log(evenSum + oddSum);
