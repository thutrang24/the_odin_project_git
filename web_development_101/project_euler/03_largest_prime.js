var product = 80;
var primes_general = [];
var primes_specific = [];

var solution = function(product){
	getPrimes(100);
    var current = product;

    for(var i = 2; i < primes_general.length; i++){
        console.log("current: " + current);
        if (current%i==0){
            primes_specific.push(i);
            current = current/i;
        }
    }
    return primes_specific;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    primes_general.push(value);
}

function getPrimes(below){
	for(var i = 2; i < below; i++){
		isPrime(i);
	}
    return primes_general;
}

console.log(solution(product));