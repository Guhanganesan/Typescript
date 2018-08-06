/*
An abstract class is a class 
that is declared abstract—it may
 or may not include abstract methods.
  Abstract classes cannot be instantiated, 
  but they can be subclassed. 
  An abstract class may have static fields and static methods.
*/
abstract class Greeter {

    abstract add();

    sub()  // non-abstract method
    {
        console.log("Hi");
    }
    static go() {
        console.log("He is going");
    }
     
     
}

//let obj = new Greeter();

class Child extends Greeter {
    sub() {
      

    }
    add()
    {
      
    }
    mul()
    {
        super.sub();
        Greeter.go();
    }

}
let obj = new Child();
obj.mul();

Result:

Hi
VM267:29 He is going
