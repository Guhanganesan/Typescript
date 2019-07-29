class College
{
     name:string;
     age:number;
     mobile:number;
    constructor(x:string,y:number,z:number)
    {
      this.name=x;
      this.age=y;
      this.mobile=z;
    }
    showDetails()
    {
      console.log(this.name);
      console.log(this.age);
      console.log(this.mobile);
    }
}


var obj=new College("Raja",25,87878);
obj.showDetails();
