var x=[10,20,40,30,5,15,25];
console.log(x);
x.push(50); //add at last
console.log(x);
x.pop();   //remove at last
console.log(x);
x.shift(); //remove at first
console.log(x);
x.unshift(50); //add at first
console.log(x);
//------------------------//
var y=x.slice(0,3); //0 to 2
console.log(y);
x.splice(1,0,100);   //(start, deleteCount, value)
console.log(x);
x[3]=90;
console.log(x);
x=[4,2,3,5,1,8,6,7];
x.sort();
console.log(x);

/*
Result:-
(7) [10, 20, 40, 30, 5, 15, 25]
VM290:5 (8) [10, 20, 40, 30, 5, 15, 25, 50]
VM290:7 (7) [10, 20, 40, 30, 5, 15, 25]
VM290:9 (6) [20, 40, 30, 5, 15, 25]
VM290:11 (7) [50, 20, 40, 30, 5, 15, 25]
VM290:14 (3) [50, 20, 40]
VM290:16 (8) [50, 100, 20, 40, 30, 5, 15, 25]
VM290:18 (8) [50, 100, 20, 90, 30, 5, 15, 25]
VM290:21 (8) [1, 2, 3, 4, 5, 6, 7, 8]

*/

