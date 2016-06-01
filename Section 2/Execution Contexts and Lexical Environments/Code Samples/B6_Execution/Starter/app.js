function b() {
    console.log('Called b!');
} // creation phase
b(); // execution phase
console.log(a); //execution phase

var a = 'Hello World!'; // creation phase
console.log(a); //execution phase
