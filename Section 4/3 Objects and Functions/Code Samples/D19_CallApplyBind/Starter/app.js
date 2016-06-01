/* this inside functions point to the object itself */

var person = {
	firstname:'John',
	lastname:'Doe',
	getFullname:function(){
		var fullname = this.firstname + this.lastname;
		return fullname;
	}
};

var logName = function (lang1,lang2) {
	console.log('Logged '+ this.getFullname()); // error Uncaught TypeError: this.getFullname is not a function
	console.log('Arguments ' + lang1 + ' ' + lang2);
	console.log('----------');
}
// .bind(person);
// Function expression
var logPersonName = logName.bind(person); 

//Attach the person object to the logName function by creating a new copy.

// whatever object we want the 'this' to point to.

/*creates a copy of the logName function and sets it up to the object. */
logPersonName('en');

/* this here points to global object */

logName.call(person,'en','es'); // let you control what this means.

logName.apply(person,['en','es']); // apply takes array of parameters.

(function (lang1,lang2) {
	console.log('Loggeds '+ this.getFullname()); // error Uncaught TypeError: this.getFullname is not a function
	console.log('Arguments ' + lang1 + ' ' + lang2);
	console.log('----------');
}).apply(person,['en','es']);




// function borrowing

var person2 = {
	firstname:'Tony',
	lastname:'Alicea',
};

console.log(person.getFullname.apply(person2,['en','es']));

// borrowing a function, get a function from person 

//function currying

function multiply(a,b){
	return a* b;
}

/* First parameter 'a' is set to 2 */
var multiplication = multiply.bind(this,2);

// this becomes the second parameter.
console.log(multiplication(4)); 

/*
	bind creates a copy of the function and set the this variable
	Setup a permanent value for the first param
	while calling it, use that param as second param.
*/



