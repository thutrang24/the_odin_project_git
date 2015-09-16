var limit = 4000000;

var start = new Date().getTime();
console.log('Answer: ' + solution(limit));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');


var solution = function(limit){
	var element = 0;
	var sequence = [1,2];
	var sum = 0;

	//get sequence
	while(element < limit){
		element = sequence[sequence.length - 1] + sequence[sequence.length - 2];
		sequence.push(element);	
	}

	//get sum by adding all even value together
	for(var i = 0; i < sequence.length; i++){
		if (sequence[i]%2==0){
			sum = sum + sequence[i];
		}
	}

	return sum;
};