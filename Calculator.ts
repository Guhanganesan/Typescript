var x=prompt("Enter Number 1")
var y=prompt("Enter Number 2")
var z=prompt("Enter Operator")
var m=Number(x);
var n=Number(y);
function add(k:number,l:number)
{
console.log(k+l);
}
function sub(k:number,l:number)
{
console.log(k-l);
}
function mul(k:number,l:number)
{
console.log(k*l);
}
function div(k:number,l:number)
{
console.log(k/l);
}
switch(z)
{
  case '+':
  add(m,n);
  break;

  case '-':
  sub(m,n);
  break;

  case '*':
  mul(m,n);
  break;

  case '/':
  div(m,n);
  break;
}
