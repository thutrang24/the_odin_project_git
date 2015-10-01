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

	var value = value.toString();
	var center_point = value.length / 2;
	var head = []; var tail = [];
	if (value.length % 2 == 0) {
		var halves = split_value(value, center_point, 0);
		head = halves[0];
		tail = halves[1];


	} else {
		center_point = Math.floor(center_point);
		var halves = split_value(value, center_point, 1)
		head = halves[0];
		tail = halves[1];
	}

	return compare_lists(head, tail);
}


function split_value(value, index, exclude_center) {
	var head = (value.substring(0, index)).split('');
    var tail = (value.substring(index + exclude_center)).split('');
    return [head, tail];
}

function compare_lists(a, b){
	var a_length = a.length;
	var b_length = b.length;
	for (var i = 0; i < a_length ; i++) {
		for (var j = 0; j < b_length; j++) {
			if(a.shift() === b.pop()){
				continue;
			}else{
				return false;
			}
		}
		return true;
	}
}

var solution = get_largest_palindrome();
console.log("solution: " + solution);