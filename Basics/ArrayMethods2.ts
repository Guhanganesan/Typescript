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


var arr=[3,4,1,6,8,9,7];
console.log(arr.concat(5));
arr.fill(10,4);
console.log(arr);

var res =[5,7,8,4,9].filter(
    function(element)
    {
       return element==4;
    }
    );
console.log(res);

var res1= arr.find(
    function(element)
    {
       return element==4;
    }
);
console.log(res1);

var arr=[3,4,1,6,8,9,7];
arr.forEach(
    function(element)
    {
     console.log(element);
    }
);




/*

(8) [3, 4, 1, 6, 8, 9, 7, 5]
VM72:5 (7) [3, 4, 1, 6, 10, 10, 10]
VM72:9 [4]
VM72:13 4

3
VM73:4 4
VM73:4 1
VM73:4 6
VM73:4 8
VM73:4 9
VM73:4 7

*/
