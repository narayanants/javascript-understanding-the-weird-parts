var a = 3;
console.log(typeof a); // number (lowercase n which denotes it a number)

var b = "Hello";
console.log(typeof b); // string (lowercase n which denotes it a string)

var c = {};
console.log(typeof c); // object (lowercase n which denotes it a object)

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d));

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);// object
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);//

