var person = new Object();

person["firstname"] = "Tony"; // object gets a reference to the address of the location in memory.
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person); // Object
console.log(person[firstNameProperty]); // Tony

console.log(person.firstname); // Tony
console.log(person.lastname); // Alicea

person.address = new Object();

person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);