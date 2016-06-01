function makeGreeting(language){
	return function(firstname,lastname){
		if(language === 'en'){
			console.log('Hello'+ ' '+ firstname + ' ' +lastname);
		}
		if(language === 'es'){
			console.log('Hello'+' '+ firstname + ' ' +lastname);
		}
	}
}

var greetEnglish  = makeGreeting('en'); // own execution context above global
var greetSpanish = makeGreeting('es'); // own execution context above global

greetEnglish('John', 'Doe');
greetSpanish('Tony', 'Alicea');

/* 
	Function Factory:
	================

	Global execution context has greetSpanish, greetEnglish, makeGreeting()

	makeGreeting() has own execution context and has language 'en'

	Return a function that points to en has language is en is still in memory.

	makeGreeting() has own execution context and has language 'en'

	when greetEnglish('John', 'Doe'); is called, again a new execution context is created  and language 'en' is referenced to that function.

	This concept is called a closure.

	when greetEnglish('John', 'Doe'); is called, again a new execution context is created  and language 'es' in memory is referenced to that function.

*/