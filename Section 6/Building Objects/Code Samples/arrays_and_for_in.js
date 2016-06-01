
Array.prototype.myCustomFeature = 'Cool!';
var arr = ['John','Jane','Doe'];

for(var prop in arr){
	console.log(prop+ ' :' +arr[prop]);
}

/*
	OUTPUT
	======

	0 : John
	1 : Jane
	2 : Doe
*/