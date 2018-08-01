var x = new Array("Ramesh", "Guhan", "Anbu");
console.log(x[0]);
console.log(x);
x.push("Kathir");
console.log(x); //It add new element at last
x.push("Kesav", "Magavir");
console.log(x);
x.pop(); // It removes last element
console.log(x);
//x.fill("Ramakumar"); // It fill complete array elements
//console.log(x);

x.unshift("Kannan");
console.log(x); // It adds elements at first



Result:

Array(6)0: "Kannan"1: "Ramesh"2: "Guhan"3: "Anbu"4: "Kathir"5: "Kesav"length: 6__proto__: Array(0)


var x = new Array("Ramesh", "Guhan", "Anbu","mathan");
x.forEach(function (m)
{ console.log(m)}
);
// Print all the elements
var y = new Array("Tera");

console.log(x.concat(y));

console.log(x.join("*"));

console.log(x.reverse());

console.log(x.slice(0, 2)); //before 2

console.log(x.sort());


var x = new Array("Ramesh", "Guhan", "Anbu","mathan");

console.log(x.splice(0, 2)); 
//Ramesh, Guhan


x.splice(1, 0, "siva");
console.log(x);
/*
[
  "Ramesh",
  "siva",
  "Guhan",
  "Anbu",
  "mathan"
]
Insert 1 element at 1st index
*/


x.splice(1, 1, "Siva");
console.log(x);
// Insert 1 element at 1st index



x.splice(2, 2, "T", "N");
console.log(x);

// Insert two element at 2,3 index


x.splice(2, 3, "P");
console.log(x);

// only one element






