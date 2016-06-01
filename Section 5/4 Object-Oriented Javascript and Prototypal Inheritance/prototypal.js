var person ={
	firstname:'Naryanana',
	lastname:'Ts'
	getFullName:function(){
		return function(){
			return this.firstname + ' ' + this.lastname;
		}
	}
};

var john = {
	firstname:'John',
	lastname: 'Doe'
};

// dont do this ever! Demo purposes only.

john.__proto__ = person; // john inherits from person.
console.log(john.getFullName());