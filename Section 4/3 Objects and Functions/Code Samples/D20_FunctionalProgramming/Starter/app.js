/*Functional Programming*/

function mapForEach(arr,fn){
	var newArr = [];
	for(var i=0;i<arr.length;i++){
		newArr.push(
				fn(arr[i])
			);
	}
	return newArr;
}

var arr = [1,2,3];
console.log(arr);

var arr2 = mapForEach(arr,function(item){
	return item * 2;
});	

console.log(arr2);

var arr3 = mapForEach(arr, function(item) {
   return item > 2; // 1>2 false 2>2 false 3>2 true
});
console.log(arr3);

var checkPastLimit = function(limiter,item){
	//alert(item);
	return item > limiter; // 1>1 false 2>1 true 3>1 true
}

var arr4 = mapForEach(arr,checkPastLimit.bind(this,1)); // 1>1 2>1 3>1
console.log(arr4);

var checkPastLimitSimplified = function(limiter){
	return function(limiter,item){
		return item > limiter;
	}.bind(this,limiter)
}
var arr5 = mapForEach(arr,checkPastLimitSimplified(1)); // 1>1 2>1 3>1
console.log(arr5);