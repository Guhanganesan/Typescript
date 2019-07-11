var x=[10,20,40,30,5,15,25];
console.log(x);
var index = x.lastIndexOf(15);
console.log(index);
console.log(x.length);
x.reverse();
console.log(x);
console.log(x.toString());
var y=[4,5,6];
console.log(x.concat(y[0]));

/*

Console was cleared
VM305:3 (7) [10, 20, 40, 30, 5, 15, 25]
VM305:5 5
VM305:6 7
VM305:8 (7) [25, 15, 5, 30, 40, 20, 10]
VM305:9 25,15,5,30,40,20,10
VM305:11 (8) [25, 15, 5, 30, 40, 20, 10, 4]

*/
