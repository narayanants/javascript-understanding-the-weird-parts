function sayHiLater(){
	var greeting = 'Hi';
	/* Wait for 3 secs and after that run it*/
	/*Take this function and done working execute it*/
	/*Callback function*/
	setTimeout(function(){
		console.log(greeting);
	},2000);
}

sayHiLater();

/* Function expressions and first class functions */
/*$("button").click(function(){

});	*/


function tellMeWhenDone(callback){
	var a = 1000; // some work
	var b = 2000; // some work
	alert('hello');
	callback();
}

tellMeWhenDone(function(){
	alert('Im done!');
});	
tellMeWhenDone(function(){
	alert('All done!');
});	