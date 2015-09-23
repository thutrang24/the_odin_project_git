// Find the sum of all the multiples of 3 or 5 below 1000.

var solution;

function multiples_three_five() {
	var sum = 0;

	for(var i = 0; i < 1000; i++){
		if(i%3==0 || i%5==0){
			sum = sum + i;
		}
	}

	return solution = sum
}


multiples_three_five();
console.log("solution: " + solution);