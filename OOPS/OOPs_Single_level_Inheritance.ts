class Kala
{
    public name = "Kala";
     ondrser()
    {
         console.log("Ondruser");
    }
   constructor() {
        console.log("Karpi");
    }
    puratchi()
    {
        console.log("Puratchi");
    }

}

var rajni = new Kala();
var ranjith = new Kala();
ranjith.ondrser();
rajni.puratchi();

class Kabali extends Kala
{
    name = "Kabalida";
    nimirnthu_nil()
    {
        console.log("Therikka vidalama");
        super.ondrser();
        super.puratchi();
    }
}

let obj = new Kabali();
obj.nimirnthu_nil();


Ans:
Karpi
VM211:20 Ondruser
VM211:23 Puratchi
VM211:17 Karpi
VM211:39 Therikka vidalama
VM211:20 Ondruser
VM211:23 Puratchi


