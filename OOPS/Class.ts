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
    name="Agni"; //properties/states/instance variables
    getDetails() //method
    {
      console.log("get details");
    }
}

var obj=new College();
obj.getDetails();

-----------------------------------------

class Compnay{ //class Name
    name = ""; //property or instance (object) variables
    age = 0;   //property
    openGate(){ //specific method 
        console.log("Open Gate");
    }
    
    sendEmail(){ //specific email
        console.log("Sending Email");
    }

    setDetails(a:string, b:number){ //common method
        this.name = a;
        this.age = b;
    }

    getDetails(){ //common method
        console.log(this.name);
        console.log(this.age);
    }
}
let gk = new Compnay();//object
gk.openGate(); // method calling
gk.setDetails("Karthik", 42);
gk.getDetails();
let ceo = new Compnay();//object
ceo.setDetails("Madhan", 55);
ceo.getDetails();
ceo.sendEmail();



