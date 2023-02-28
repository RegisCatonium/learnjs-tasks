'use strict'

// Случайное целое число от min до max

// первое решение
// function random(min, max) {
// 	return ( Math.round(Math.random() * (max - min) + min) );
// }

// второе решение
function random(min, max) {
	return ( Math.floor(Math.random() * (max + 1 - min) + min) );
}

console.log( random(2, 4) );