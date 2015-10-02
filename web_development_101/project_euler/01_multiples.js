/*
	Get sum of all the multiples of 3 or 5 below 1000.
*/


var solution = function() {
	var sum = 0;

	for(var i = 0; i < 1000; i++){
		if(i%3==0 || i%5==0){
			sum = sum + i;
		}
	}
	return sum
}


var start = new Date().getTime();
var answer = solution();
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime: ' + (end-start) + " ms");