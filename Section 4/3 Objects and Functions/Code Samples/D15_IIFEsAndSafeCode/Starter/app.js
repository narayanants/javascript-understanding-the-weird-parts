// IIFE
//var firstname = 'John';
/* greet.js stacks on top of app.js */
//var greeting = 'Hola!'; is inside greet.js
(function(global,name) {
    
    var greeting = 'Hello'; // inside its own execution context..not into global
    //console.log(greeting);
    global.greeting = 'Hello!'; // changed/mutated the value on the global env
   //	 console.log(greeting + ' ' + name);
}(window,'John')); // IIFE // reference to the global object.
console.log(greeting);






















