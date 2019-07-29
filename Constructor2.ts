class College
{
     name:string;
     age:number;
     mark:number;
    constructor(x:string,y:number,z:number)
    {
      this.name=x;
      this.age=y;
      this.mark=z;
    }
    showDetails()
    {
      console.log(this.name);
      console.log(this.age);
      console.log(this.mark);
    }
}

var obj1=new College("Raja",25,87);
var obj2=new College("Anbu",26,34);
var obj3=new College("Kannan",28,67);
console.log(obj1.mark);
console.log(obj2.mark);
console.log(obj3.mark);

var temp = new College("Vimal",56,4564);
temp=obj1;
temp.showDetails();

/*
87
VM517:18 34
VM517:19 67
VM517:9 Raja
VM517:10 25
VM517:11 87
*/
