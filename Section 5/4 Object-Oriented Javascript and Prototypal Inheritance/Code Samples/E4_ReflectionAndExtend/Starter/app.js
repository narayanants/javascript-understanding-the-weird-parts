var person = {
	firstname: 'Naryaanan',
	lastname:'Ts',
	getFullName: function(){
		var fullname = this.firstname + ' ' + this.lastname;
	}
};


var john = {
	firstname:'John',
	lastname:'Doe'
};

john.__proto__ = person;

for(var prop in john){
	if(john.hasOwnProperty('firstname')){
		//console.log(prop + ':' + john[prop]);	
	}
}

var jane = {
	address: '111 Main st.',
	getFormalFullName:function(){
		return this.lastname + ', ' + this.firstname;
	}
};

var jim = {
    getFirstName: function() {
        return firstname;   
    }
}

_.extend(john, jane, jim); // combines all properites and methods and add them to john.

console.log(john); 









