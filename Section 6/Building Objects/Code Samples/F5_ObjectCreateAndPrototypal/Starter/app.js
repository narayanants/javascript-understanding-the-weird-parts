// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname:'Default',
  lastname:'Default',
  greet:function(){
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person);
john.firstname = "Tony";
john.lastname = 'Alicea';
console.log(john.greet());

/* Object.create() points to an empty object and its prototype points to whatever you passed into it as param .*/

