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
        Siva.act();
    }
}

let obj = new Surya();
obj.dance(); // It shows only non static methods
Surya.act();// Accessing the static method

Result:
769869
He is acting


