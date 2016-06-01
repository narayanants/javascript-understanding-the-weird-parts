String.prototype.isLengthGreaterThan = function(limit){
	return this.length > limit;
}
console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function(){
	return this > 0;
}
var a = new Number(3);
console.log(a.isPositive());

var a = 3; // primitive
var b = new Number(3); // object created by function constructor.
console.log(a==b);
console.log(a===b);

var d = new Date()