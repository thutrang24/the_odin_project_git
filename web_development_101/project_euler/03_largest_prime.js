/*
	get largest prime
*/

primes = []

var solution = function(){
	fill_primes(10000);
	return get_largest_prime(600851475143);
};


function is_prime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

function fill_primes(limit){
	for(var i = 2; i < limit; i++){
	if(is_prime(i)){
			primes.push(i)
		}
	}
}


function get_largest_prime(value){
	prime_factors = [];
	i = 0;
	do{	
		if(value%primes[i]==0){
			prime_factors.push(primes[i])
			value = value / primes[i]
			i == 0
		}else{
			i++
		}
	}while(!(value == 1));

	largest_prime = prime_factors[prime_factors.length-1];
	return largest_prime;
}


var start = new Date().getTime();
var answer = solution();
var end = new Date().getTime();
console.log('Answer: ' + answer);
console.log('Runtime ' + (end-start) + " ms");