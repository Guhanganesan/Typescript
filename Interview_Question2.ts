// Q1:
function add(x)
{
    console.log(x);
}

add(null);


// Q2:
function add(x=10)
{
    console.log(x);
}

add(null);

// Q3:
function add(x=10)
{
    x = 20;
    console.log(x);
}

add(null);


// Q4:
var x, y;
function add(x = 10, y = 20)
{
    console.log(x+"**"+y);
}

add(x=20,y=10);


// Q5:
var x, y;
function add(x = 10, y = 20)
{
    console.log(x+y);
}

add(x=20,y=null)


// Q6:
var x, y;
function add(x = 10, y = 20)
{
  var   z = function ()
    {
      var m = function ()
      {
          return x+y;
      }
       return m();
    }
    return z()+20;
}

console.log(add());


// Q7:
var j:any; 
var nums:number[] = [1,4,5,6] 

for(j in nums) { 
    console.log(nums[j]);
}


// Q8:
var names: string[] = new Array("Muthu", "Guhan", "Siva", "Pradeep");  

function disp(x: string[]) {
    
   for(var i = 0;i<x.length;i++) { 
      console.log(x[i]) 
    }  
   
}  
disp(names) 



Ans:
null
null
20
20**10
20
50

1
4
5
6

Muthu
Guhan
Siva
Pradeep


