(function(global, $) {
    
	var Greetr = function(firstname,lastname,language){
		return  new Greetr.init(firstname,lastname,language) ; // return results of different function constructor
	}; // I don't need set up the object with the new keyword

	Greetr.prototype = {};

	/* Any methods that we use inside Object returned from Greetr */

    Greetr.init = function(firstname,lastname,lastname){
    	var self = this;
    	self.firstname = firstname || '';
    	self.lastname = lastname || '';
    	self.language = language || 'en';
    }

    // All my objects point here 

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr; // exposing it to the global
  	  
}(window, jQuery));