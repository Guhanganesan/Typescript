class SivaKumar
{   
    private pin = 1234;
    protected mob = 73268723;
    public name = "Acting";
    email;
    protected acct;
   protected act(){
       console.log("He is acting");
       this.acct = 876876;
    }

    constructor()
    {
        console.log("I am a constructor");
        this.email = "g@gmail.com";
    }
}

let obj = new SivaKumar();

class Surya  extends SivaKumar
{  
    dance()
    {
        console.log(this.name);
        console.log(this.mob);
        this.act();
        super.act();
        console.log(this.email);
        console.log(this.acct);
    }
}
let surya_obj = new Surya();
surya_obj.dance();

Result:-
I am a constructor(2)
VM462:35 Acting
VM462:36 73268723
2VM462:23 He is acting(2)
VM462:39 g@gmail.com
VM462:40 876876


console.log("Hello....");
class Test{


    protected name="Guhan";
    private pin = 12345;
    age=20;

    constructor(){
        // console.log(this.name);
        // console.log(this.age);
    }

    hello(){
        console.log("h")
    }
}

class B extends Test{

    constructor(){
        super();
        super.hello();
        console.log(this.name);
    }
}

var b = new B();