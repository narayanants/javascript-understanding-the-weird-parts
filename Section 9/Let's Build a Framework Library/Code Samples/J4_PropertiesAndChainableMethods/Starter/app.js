var g = G$('John', 'Doe'); // points to the Greetr function

/* Greetr function return new Greetr.init() which build and sets the params
	These methods have access to all the properties of the prototype. */

g.greet().setLang('fs').greet(true);
console.log(g);