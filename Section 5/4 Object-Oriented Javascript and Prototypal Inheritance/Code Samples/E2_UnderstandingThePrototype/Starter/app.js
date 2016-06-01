/* Class Object that other objects inherits from */

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
};
/* Prototypal Object that inherits from class object */
var john = {
    firstname: 'John',
    lastname: 'Doe' // ooks here for getFullName and doesn't find it and goes and gets it from person.
};

// don't do this.. demo purposes only.
/*John inherits from person */

john.__proto__ = person;
console.log(john.getFullName()); // this here refers to the john object because it's the one called.
console.log(john.firstname); 

/* first looks at john and if it finds it stops */

var jane = {
	firstname : 'Jane'
};

jane.__proto__ = person; // points to the same object in person.
console.log(jane.getFullName()); // when we access getFullName() looks for it in person but lastname is results to Default.
person.getFormalFullName = function(){
	return this.lastname + ' ' + this.firstname;
}
console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());