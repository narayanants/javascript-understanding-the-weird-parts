class Person{
	constructor(firstname,lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet(){
		return 'Hi' + firstname;
	}
}
/* class is an object */

var john = new Person('John','Doe')


/* Extends sets the prototype */

class InformalPerson extends Person{
	constructor(firstname,lastname){
		super(firstname,lastname);
	}
	greet(){
		return 'Yo' + firstname;
	}
}