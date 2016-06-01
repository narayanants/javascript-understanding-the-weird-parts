function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
};

/* john objects prototype points to Person.prototype as it prototype(__proto_) */
var john = new Person('John', 'Doe');
console.log(john);

/* when we call the new keyword, it creates an empty object
   it then sets the prototype of the empty object tot the prototype function you then call.
*/

var jane = new Person('Jane', 'Doe');
console.log(jane);

/* If we use new operator it creates an empty object and points the this keyword points to that keyowrd 
	
*/
