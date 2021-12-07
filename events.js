// // let element = document.getElementById("ramya");

// // element.addEventListener("click", display());
// // function display() {
// //   let a = 20 + 30;
// //   document.getElementById("ramya").innerHTML = a;
// // }

// let text =
//   '{ "employees" : [' +
//   '{ "firstName":"John" , "lastName":"Doe" },' +
//   '{ "firstName":"Anna" , "lastName":"Smith" },' +
//   '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// let res = JSON.parse(text);
// console.log(res);

// let result = JSON.stringify(res);
// console.log(result);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
  });

// fetchRes is the promise to resolve
// it by using.then() method
