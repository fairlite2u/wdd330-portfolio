/// Dice example from Ch 5 rewritten as a constructor function:
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

const redDice = new Dice();
const whiteDice = new Dice(4);

// Dice example rewritten using a class declaration (preferred method):
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
    // add a static method
    static description() {
        return 'A way of choosing random numbers'
    }
}

const blueDice = new Dice(20);

// Prototypal Inheritance
class Turtle {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
}

const leo = new Turtle('Leonardo');

// Add new properties by assignment:
Turtle.prototype.weapon = 'Hands';

// Add a method:
Turtle.prototype.attack = function() {
    return `Feel the power of my ${this.weapon}!`;
}

const raph = new Turtle('Raphael');

const don = new Turtle('Donatello');

// Change the value of a prototype property:
Turtle.prototype.weapon = 'Feet';

// Set own weapon properties for individuals:
leo.weapon = 'Katana Blades';
raph.weapon = 'Sai';
don.weapon = 'Bo Staff';

// The prototype can be used to add any new properties and methods after the class has been declared. 
// It should be used to define any properties that will remain the same for every instance of the class. 
Turtle.prototype.food = 'Pizza';

Turtle.prototype.eat = function() {
    return `Mmm, this ${this.food} tastes great!`;
}

const mike = new Turtle('Michelangelo');


// Demonstrating Private vs Public
class Turtle {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}