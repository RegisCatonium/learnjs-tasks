'use strict'

// Случайное число от min до max

let string = '$120';

function extractCurrencyValue(str) {
	return +str.slice(1);
}

console.log( extractCurrencyValue(string) );
