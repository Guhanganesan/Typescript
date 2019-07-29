class College
{
    name="Agni";
    getDetails()
    {
      console.log("get details");
    }
}

console.log(College.name);
//College.getDetails(); // Can't call
var obj=new College();
obj.getDetails();
/*
Anser:-
College
VM510:7 get details
*/
