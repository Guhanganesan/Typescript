interface Greeter {

        add();

        sub();
     
     
}

//let obj = new Greeter(); Can ntot create object

class Child implements Greeter {
    add() {
        console.log("Add");
    }
    sub()
    {
     console.log("Sub")
    }

}
let obj = new Child();
obj.sub();
obj.add();

Result:

Sub
VM296:6 Add
