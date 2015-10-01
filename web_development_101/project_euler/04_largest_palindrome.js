function get_largest_palindrome(){
	var product;
	var start = 999;
	var end = 99;
	var current_largest_palindrome = 0;

	for (var i = start; i > end; i--) {
		for (var j = start; j > end; j--) {
			product = i * j;		
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

var solution = get_largest_palindrome();
console.log("solution: " + solution);