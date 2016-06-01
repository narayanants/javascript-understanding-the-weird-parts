function buildFunctions() {
	var arr = [];
	for(var i=0; i<3;i++){
		arr.push(
				function(){
					console.log(i);
				}
			);
	}
	return arr;
}
var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
/*
	Registers the function in global execution context
	contains buildFunctions and fs
	i, arr[f0,f1,f2]

	i loops through and add 3 function during loop execution.
	i incremented to 3 in global env.
	buildFunctions execution context is poped of the stack.

	code properties are still in memory.

	fs[0]() runs and creates a new execution context and then references to the outer env and logs i value to 3
	Next function also references to the same spot in memory and have all have the same i values.

	3 children and how old their father is.	
*/

function buildFunctions2() {
	var arr = [];
	for(var i=0; i<3;i++){
		arr.push(
				(function(j){ // IIFE
					return function(){
						console.log(i);
					}
				}(i))
			);
	}
	return arr;
}
var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

/*
	Pushing the result of the function
	When the function is executed its gives us a return function
	Then the return function is executed.
	j stores value of each i during each execution
*/