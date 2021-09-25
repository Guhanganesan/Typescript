var x: number | string;
x = "guhan";
console.log(x);
x = 456;
console.log(x);


function check(m: string | number) {
    if (typeof (m) == "number" )
    {
       console.log("Hi");
    }
    else if (typeof (m) == "string")
    {
       console.log("Hello")
   }
    
}
check("Guhan"); // 55


