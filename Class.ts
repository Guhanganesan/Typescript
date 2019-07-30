/*
Class − A class can be defined as a template/blueprint that describes 
the behavior/state that the object of its type support.
 
It contains real values instead of variables.

Object − Objects have states and behaviors.
An object is a specific instance of a class;
 
Example: A dog has states - color, name, breed as well as 
behaviors – wagging the tail, barking, eating. 

*/

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
