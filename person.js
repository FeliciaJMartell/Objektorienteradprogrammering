"use strict";
class Person {
    namn;
    adress;
    telefonnummer;
    constructor(namn, adress, telefonnummer) {
        this.namn = namn;
        this.adress = adress;
        if (telefonnummer) {
            this.telefonnummer = telefonnummer;
        }
    }
    skrivUt() {
        return `Hej, jag heter ${this.namn} och min adress är ${this.adress}${this.telefonnummer ? `. Mitt nummer är: ${this.telefonnummer}` : ""}`;
    }
}
const person1 = new Person("Felicia", "Växjövägen 5", "0709670416");
console.log(person1.skrivUt());
class Student extends Person {
    klass;
    program;
    constructor(namn, adress, klass, program, telefonnummer) {
        super(namn, adress, telefonnummer);
        this.klass = klass;
        this.program = program;
    }
    skrivUt() {
        return `${super.skrivUt()}. Jag går i klass ${this.klass} och jag läser till ${this.program}`;
    }
}
const student1 = new Student("Felicia", "Växjövägen 5", "WU26", "Webbutvecklare", "0709670416");
console.log(student1.skrivUt());
class Lärare extends Person {
    ämne;
    kurs;
    constructor(namn, adress, ämne, kurs, telefonnummer) {
        super(namn, adress, telefonnummer);
        this.ämne = ämne;
        this.kurs = kurs;
    }
    skrivUt() {
        return `${super.skrivUt()}. Jag är lärare i ämnet ${this.ämne} och jag föreläser just nu ${this.kurs}`;
    }
}
const lärare1 = new Lärare("Felicia", "Växjövägen 5", "Naturvetenskap", "Naturvetenskap 1", "0709670416");
console.log(lärare1.skrivUt());
