//console.log(this); // in browser this points to window object.

function a(){
	console.log(this);
	this.newvar = 'hello'; // assign newvar to gloal object

} //a();// this also points to window object

var b = function(){
	console.log(this);
}

a();
console.log(newvar);
b();
//create a method inside object literal
var c ={
	name:'The c object', 	
	log: function () {
		var self = this; // points to the whole object.
		self.name = 'update c object'; // mutate or change it
		console.log(self); // this here refers to the object that method is sitting inside of.

		var setname = function(newname){

			self.name = newname; // points to the self in the global object. Looks for the outer env
			/*Mutates the global object this.name to param value*/
		};
		setname('updated again');
		console.log(self);
	}
};
c.log();


