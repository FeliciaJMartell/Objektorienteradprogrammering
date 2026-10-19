class Person {
    protected namn: string;
    protected adress: string;
    protected telefonnummer?: string;
    constructor(namn: string, adress: string, telefonnummer?: string) {
        this.namn = namn;
        this.adress = adress;
        if (telefonnummer) {
            this.telefonnummer = telefonnummer;
        }
    }
    skrivUt(): string {
        return `Hej, jag heter ${this.namn} och min adress är ${this.adress}${this.telefonnummer ? `. Mitt nummer är: ${this.telefonnummer}` : ""}`;
    }
}
const person1 = new Person("Felicia", "Växjövägen 5", "0709670416");

console.log(person1.skrivUt());


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

class Lärare extends Person {
    private ämne: string;
    private kurs: string;
    constructor(namn: string, adress: string, ämne: string, kurs: string, telefonnummer?: string) {
        super(namn, adress, telefonnummer);
        this.ämne = ämne;
        this.kurs = kurs;
    }
    skrivUt(): string {
        return `${super.skrivUt()}. Jag är lärare i ämnet ${this.ämne} och jag föreläser just nu ${this.kurs}`;
    }
}

const lärare1 = new Lärare("Felicia", "Växjövägen 5", "Naturvetenskap", "Naturvetenskap 1", "0709670416");
console.log(lärare1.skrivUt());