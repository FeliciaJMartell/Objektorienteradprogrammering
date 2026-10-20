/* Jag använder string så att det värde som skickas in måste vara en text. Jag använder protected så att class Lärare ska kunna läsa det. 
Jag hade kunnat använda private med hjälp av super.skrivUt, men eftersom jag ändrade texten i lärare så behövde jag använda protected. */
class Person {
    protected namn: string; 
    protected adress: string; 
    protected telefonnummer?: string; 
    /*Skapar en konstruktor som tar emot namn, adress och telenummer när ett nytt objekt skapas. Den sparar dom i objektet med this. så att jag senare
    kan skriva ut dom i detta fall med skrivUt(). Jag kan använda konstruktor till hur många objekt jag vill.*/
    constructor(namn: string, adress: string, telefonnummer?: string) { // sätter ett frågetecken på telefonnumret så att det inte är ett tvång
        this.namn = namn;
        this.adress = adress;
        /*Gör en if sats eftersom telefonnummer inte är ett tvång*/
        if (telefonnummer) {
            this.telefonnummer = telefonnummer;
        }
    }
    /*Bygger upp hur textsträngen ska se ut och hämtar mina värden som är sparade i objektet. Returnerar sedan värdet.*/
    skrivUt(): string {
        return `Hej, jag heter ${this.namn} och min adress är ${this.adress}${this.telefonnummer ? `. Mitt nummer är: ${this.telefonnummer}` : ""}`;
    }
}
/*Skickar in mina värden till konstruktorn.*/
const person1 = new Person("Felicia", "Växjövägen 5", "0709670416");
const person2 = new Person("Kalle", "Växjövägen 5");
/*Skriver ut i console.log*/
console.log(person1.skrivUt());
console.log(person2.skrivUt());

/*Använder extends så att class Student ärver alla egenskaper och metoder från class Person. Men använder super.skrivUt() så jag slipper skriva texten en gång till.
I konstruktorn måste jag använda super(). Super() sätter igång Persons konstruktor så att namn, adress och telenummer sparas i objektet.*/
class Student extends Person {
    private klass: string;
    private program: string;
    constructor(namn: string, adress: string, klass: string, program: string, telefonnummer?: string) {
        super(namn, adress, telefonnummer);
        this.klass = klass;
        this.program = program;
    }
    skrivUt(): string {
        return `${super.skrivUt()}. Jag går i klass ${this.klass} och jag läser till ${this.program}`;
    }

}

const student1 = new Student("Felicia", "Växjövägen 5", "WU26", "Webbutvecklare", "0709670416");
console.log(student1.skrivUt());

/*Använder även här extends, men inte super.SkrivUt() eftersom jag ändrade i text strängen. */
class Lärare extends Person {
    private ämne: string;
    private kurs: string;
    constructor(namn: string, adress: string, ämne: string, kurs: string, telefonnummer?: string) {
        super(namn, adress, telefonnummer);
        this.ämne = ämne;
        this.kurs = kurs;
    }
    skrivUt(): string {
        return `Mitt namn är ${this.namn}. Jag är lärare i ämnet ${this.ämne} och jag föreläser just nu ${this.kurs}. Jag bor på ${this.adress}${this.telefonnummer ?` och mitt nummer är: ${this.telefonnummer}` : ""}.`;
    }
}

const lärare1 = new Lärare("Felicia", "Växjövägen 5", "Naturvetenskap", "Naturvetenskap 1", "0709670416");
const lärare2 = new Lärare("Felicia", "Växjövägen 5", "Naturvetenskap", "Naturvetenskap 1");
console.log(lärare1.skrivUt());
console.log(lärare2.skrivUt());