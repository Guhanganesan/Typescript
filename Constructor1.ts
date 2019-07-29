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
obj1.showDetails();
obj2.showDetails();
obj3.showDetails();

/*
Answer:-
Raja
VM514:10 25
VM514:11 87
VM514:9 Anbu
VM514:10 26
VM514:11 34
VM514:9 Kannan
VM514:10 28
VM514:11 67
*/
