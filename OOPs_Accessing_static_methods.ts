class Siva
{
    static acc = 769869;
    static act()
    {
        console.log("He is acting");
    }

}

class Surya  extends Siva
{
    dance()
    {
        console.log(Siva.acc);
    }
}

let obj = new Surya();
obj.dance(); // It shows only non static methods
Surya.act();// Accessing the static method

Result:
769869
VM180:18 He is acting
