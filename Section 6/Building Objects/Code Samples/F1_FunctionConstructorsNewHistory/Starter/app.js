function Person(firstname,lastname){
	console.log(this); // empty object initially
	this.firstname = firstname; // adding properties = parameters
	this.lastname = lastname; // adding properties = parameters
	console.log('Invoked!!');
	//return {greeting:'In the way'};
	/*If we don't return anything , we get access to this*/
}

var john = new Person('Chris');
john.lastname = 'Gayle';
console.log(john);
var jane = new	Person('Jane','Doe');
console.log(jane);