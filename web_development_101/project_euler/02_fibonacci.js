//By considering the terms in the Fibonacci sequence whose values do not exceed four million,
//find the sum of the even-valued terms.

var limit = 4000000
var sequence = [1,2]
var solution;

function get_fibonacci(limit){
	do {
		value = sequence[sequence.length-2] + sequence[sequence.length-1]
		sequence.push(value)
	} while (value < limit);
	sequence.pop();
}

function sum_even_fibonacci(){
	var sum = 0;

	for(var i = 0; i < sequence.length; i++){
		
		if(sequence[i]%2==0){
			sum = sum + sequence[i];		
		}

	}
	return solution = sum;
}

get_fibonacci(limit)
sum_even_fibonacci()

console.log("solution: " + solution);