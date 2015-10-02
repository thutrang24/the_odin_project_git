var solution = function(){
	var product;
	var start = 999;
	var end = 99;
	var current_largest_palindrome = 0;

	for (var i = start; i > end; i--) {
		for (var j = start; j > end; j--) {
			product = i * j;	

			if(product < current_largest_palindrome){
				break;
			}

			if (is_palindrome(product) == true && product > current_largest_palindrome) {
				current_largest_palindrome = product;
			}
		}
	}

	return current_largest_palindrome;
}

function is_palindrome(value){
	return (value == value.toString().split('').reverse().join(''));
}

var start = new Date().getTime();
var answer = solution();
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime: ' + (end-start) + " ms");