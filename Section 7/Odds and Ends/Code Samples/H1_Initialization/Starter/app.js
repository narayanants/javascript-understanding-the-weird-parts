var people = [
	{
		//john object
		firstname: 'John',
		lastname:'Doe',
		addresses:[
			'111 Mian st',
			'222 Mian st'
		]
	},
	{
		//jane object.
		firstname: 'Jane',
		lastname:'Doe',
		addresses:[
			'333 Mian st',
			'444 Mian st'
		],
		greet:function(){
			return 'Hello';
		}
	}

];
console.log(people[1].greet());
