/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name
  this.age = age
  this.stomach = []
}
Person.prototype.eat = function(food) {
  if(this.stomach.length < 10) {
    console.log(`${this.name} ate some ${food}`);
    this.stomach.push(food);
  } else {
    console.log(`${this.name} is full.`);
  }
}
Person.prototype.poop = function() {
  console.log(`${this.name}'s stomach is now empty`);
  this.stomach = [];
}
Person.prototype.toString = function() {
  return (`${this.name} is ${this.age} years old.`)
}
// const joe = new Person({name: "Joe", age: "25"});
// joe.eat("pizza");
// joe.eat("sushi");
// // console.log(joe.stomach);
// // joe.poop();
// // console.log(joe.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons) {
  this.tank += gallons;
  return `I filled the tank with ${gallons} gallons. There are now ${this.tank} gallons in the tank.`;
}
Car.prototype.drive = function(distance) {
  if(this.tank <= 0) {
    return `I need some gas first.`;
  }
  while(distance > 0 && this.tank > 0) {
    this.odometer += 1;
    this.tank -= (1 / this.milesPerGallon);
    this.tank = Math.round(this.tank*100) / 100; //Fix floating point errors
    distance -= 1;
    if(this.tank <= 0) {
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
  return `I arrived at the destination at ${this.odometer} miles.`
}

const mobile = new Car("Batmobile", 20);
console.log(mobile.drive(50));
console.log(mobile.fill(10));
console.log(mobile.drive(16));
console.log(mobile.fill(18));
console.log(mobile.drive(800));
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `${this.name} is playing with ${this.favoriteToy}.`;
}
const baby = new Baby('Johnny', 2, 'T-rex');
baby.eat('applesauce');
console.log(baby.stomach);
console.log(baby.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global Binding - When used in a global scope, 'this' refers to the window object
  2. Implicit Binding - When used to define an object's properties or methods, 'this' will refer to the object before the dot
  3. New Binding - When used in a constructor function, 'this' will bind to whatever object is created with the constructor function
  4. Explicit Binding - When using .call, .apply, and .bind, we explicitly tell 'this' what object to bind to.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
