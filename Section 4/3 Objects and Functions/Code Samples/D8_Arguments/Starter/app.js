function greet(firstname,lastname,language) { // setup default parameters using new version of JS
	//language = language || 'en'; // older model of assigning values to 
	if(arguments.length === 0){
		console.log('Missing parameters');
		console.log('=============');
		return;
	}
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments); // List of all parameters that we passed is logged.
	console.log(arguments[0]);
	console.log('=============');
}
/* Hoists memmory space for firstname, lastname and language */
greet();
greet('Narayanan');
greet('Narayanan','Ts');
greet('Narayanan','Ts','English');