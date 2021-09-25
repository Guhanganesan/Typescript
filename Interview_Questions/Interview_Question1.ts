var x = 10;
var y = 20;
console.log(x++ + ++y);

var a1 = "10";
var a2 = "20";
console.log(a1 + a2);

var a3 = 20.45;
console.log(Math.floor(a3));

var a4 = "20";
var a5 = 55;
console.log(a5 + parseInt(a4));

var a6 = "10 Rupees";
var a7 = "20 Rupees";
console.log(parseInt(a6) + parseInt(a7));

var a8 = 20.45;
console.log(typeof (a8));

var a9 = [];
console.log(typeof (a9));

var a10 = 10;
switch (a10)
{
    case 10:
        console.log("Hi");
        
    case 10 || 20:
        console.log("How");
        
    case 10 && 20:
        console.log("Are");
        
    default:
        console.log("you");
        break;
}

var sum = 1;
for (var i = 1; i <= 5; i++)
{ 
    sum += sum * i;

}
console.log(sum);

Result:

31
VM541:6 1020
VM541:8 20
VM541:11 75
VM541:14 30
VM541:16 number
VM541:18 object
VM541:22 Hi
VM541:24 How
VM541:26 Are
VM541:28 you
VM541:35 720
