var x: any = new String();

x.name = "Guhan";

console.log(x.name);


var m = "Guhan";
console.log(m.substring(0, 2));
console.log(m.replace("ha","ka"))
console.log(m.charAt(2));
console.log(m.fontcolor("red"));
console.log(m.length);
console.log(m.concat("Anbu"));
console.log(m.toLowerCase());
console.log(m.toUpperCase());

var n = "Anbu Raja kamal venkat";

console.log(n.replace("Raja", "kathir"))

console.log(n.split(" ", 3))

var s = "Typescript";
var t = s.substr(0, 4);
console.log(t);

Result:

Guhan
VM554:5 Gu
VM554:6 Gukan
VM554:7 h
VM554:8 <font color="red">Guhan</font>
VM554:9 5
VM554:10 GuhanAnbu
VM554:11 guhan
VM554:12 GUHAN
VM554:14 Anbu kathir kamal venkat
VM554:15 Array(3)
VM554:18 Type
