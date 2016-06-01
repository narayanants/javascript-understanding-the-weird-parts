var arr = [
		1,
		false,
		{
			name:'Tony',
			address:'111 Main St.'
		},
		function (name) {
			var greeting = "hello";
			console.log(greeting + " " +name);
		},
		"hello"
	];

console.log(arr);
arr[3](arr[2].name);