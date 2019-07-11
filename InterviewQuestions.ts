//Sum of digits

var num=12345;
var temp=0;
var rem=0;
while(num>0)
{
    rem=Math.floor(num%10);
    temp=temp+rem;
    num=Math.floor(num/10);
}
console.log(temp);



//Reverse a number

var num=12345;
var temp=0;
var rem=0;
while(num>0)
{
    rem=Math.floor(num%10);
    temp=temp*10+rem;
    num=Math.floor(num/10);
}
console.log(temp);

//Armstrong Number
var num=371;
var temp=0;
var rem=0;
var test=num;
while(num>0)
{
    rem=Math.floor(num%10);
    temp=temp+rem*rem*rem;
    num=Math.floor(num/10);
}
if(test==temp)
{
  console.log("Armstrong Number");
}



//Prime or not prime

var num=23;
var check=false;
for(var i=2; i<num;i++)
{
    if(num%i==0 && i<num/2)
    {
      check=true;
    }
}

if(check==false)
{
    console.log("Prime")
}
else
{
    console.log("Not prime");
}

//Fibonacci Series
var f=0;
var s=1;
var n=0;
for(var i=2; i<10;i++)
{
    console.log(f);
    n=f+s;
    f=s;
    s=n;
}

