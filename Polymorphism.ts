class College
{
    collectFee(x:number)
    {

    }
    
}

class Diploma extends College
{
    collectFee(x:number)
    {
      console.log(x);
    }
}

var obj=new College();
obj.collectFee(10);

obj=new Diploma();
obj.collectFee(10);


(<College> obj).collectFee(20);
