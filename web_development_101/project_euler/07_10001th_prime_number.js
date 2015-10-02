var solution = function(){
	var counter = 0;
	var index = 2;

	while (counter < 10001){
		if (is_prime(index)){
			counter += 1;
		}
		index  += 1;
	}
	return index-1;
}


function is_prime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

var start = new Date().getTime();
var answer = solution();
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime: ' + (end-start));