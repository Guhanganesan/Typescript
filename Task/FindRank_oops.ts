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

var arr=[obj1, obj2, obj3];
var temp=new College("Vimal",25,65);
for(var i=0; i<arr.length; i++)
{
    for(var j=0; j<arr.length; j++)
    {
       if(arr[i].mark>arr[j].mark)
       {
          temp=arr[j];
          arr[j]=arr[i];
          arr[i]=temp;
       }
    }
}
for(var i=0; i<arr.length; i++)
{
    console.log("Rank "+(i+1)+" "+arr[i].name);
}

/*
Rank 1 Raja
VM521:29 Rank 2 Kannan
VM521:29 Rank 3 Anbu
*/
