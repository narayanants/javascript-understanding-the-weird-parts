greet();
/* Function statement */
function greet(){
	console.log('hi');
}
//anonymousGreet(); // results in undefined

/* Function Expression
   can be called only after declaration
*/

var anonymousGreet = function() { // since the variable is defined after the code is invoked.
	console.log('hi');
}
anonymousGreet();
/*Puts the object into memory and the variale point the anonymousGreet function to the address of the function.*/

function log(a){
	console.log(a);
}

/*creating object on the fly. First class functions*/
/*calling log and passing the function */
/*Passing a function as parameter to other functions */
log(function(){
	console.log('Hi');
});
