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
