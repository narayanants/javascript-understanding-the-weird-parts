var person = {
	firstname:'Narayanan',
	lastname:'Ts',
	getFullName:function(){
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var john = {
	firstname:'John',
	lastname:' Doe'
}

john.__proto__ = person;

console.log(john.getFullName());
person.getReverseName = function(){
	var reverse = this.lastname + ' ' + this.firstname;
	return reverse;
}

console.log(john.getReverseName());

var jane = {
	lastname:'Doe'
}

jane.__proto__ = person;

console.log(jane.getReverseName());