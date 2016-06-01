	// By value  (primitives)

var a = 3;
var b;
/* Creates new spot in memory 
   Copies that value from a to b
   a = 3, b = 3
*/
b=a; // by value
a = 2;
console.log(a); //2  
console.log(b); //3

//by reference( all object (including functions))

var c = {greeting:'hi'};
var d;
d = c;
c.greeting = 'hello'; //mutate
console.log(c);
console.log(d); // if c changes d also changes!
/* They point to the same address */

/// by reference (even as parameters)
function changeGreeting(obj){
	obj.greeting = 'Hola'; // mutation
}
changeGreeting(d); // d is pass to obj
console.log(c); // Hola
console.log(d); // Hola

//equals operator sets up new memory space(new address)
c = {greeting:'howdy'};
console.log(c); // howdy
console.log(d); // hola
