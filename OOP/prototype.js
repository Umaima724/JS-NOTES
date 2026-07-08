// Everything in JavaScript is an object 
// but primitives like strings are temporarily wrapped in objects,
// allowing us to use methods like .length, .trim(), etc.

// We can even add our own methods to built-in objects using prototypes.
// let myName = "umaima     "
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    // "this" refers to the object that called the function.
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// Every object in JavaScript inherits from Object.prototype
// So if we add a method here
// ALL objects arrays, functions, normal objects, etc can use it
Object.prototype.umaima = function(){
    console.log(`Umaima is present in all objects`);
}

Array.prototype.heyUmaima = function(){
    console.log(`Umaima says hello`);
}

// heroPower.umaima()
// myHeros.umaima()
// myHeros.heyUmaima()
// heroPower.heyUmaima()

// inheritance

const User = {
    name: "person",
    email: "person@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Code     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"umaima".trueLength()
"iceAmericano".trueLength()