var greet = 'Hello!'; // 1st page
var greet = 'Hola!'; // 2nd page

console.log(greet);	

var english = {
	greetings:{
		basic:'Hello'
	}
};
var spanish = {};

//They don't collide each other
english.greet = 'Hello'; 
spanish.greet = 'Hola!';
console.log(english);
