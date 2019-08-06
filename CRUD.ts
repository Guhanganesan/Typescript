class Agni
{
  name:any;
  user:any;
  pass:any;
  register(a:string,b:string,c:string)
  {
    this.name=a;
    this.user=b;
    this.pass=c;
  }
  display()
  {
      console.log(this.name);
      console.log(this.user);
      console.log(this.pass);
  }

  login(a:string,b:string)
  {
  
    if(this.user==a && this.pass==b)
    {
      this.display();
    }
  }
 
  update(a:string,b:string)
  {
  
    if(this.user==a && this.pass==b)
    {
      this.name=prompt("Enter name");
      this.user=prompt("Enter user");
      this.pass=prompt("Enter Pass");
    }
  }

  delete()
  {
    this.delete();
  }

}

var raja=new Agni();
raja.register("Raja","raja123","1234");
raja.login(raja.user,raja.pass);

raja.update(raja.user,raja.pass);
raja.display();

raja.delete();

raja.display();

