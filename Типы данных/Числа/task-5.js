'use strict'

// Случайное число от min до max

function random(min, max) {
	return ( Math.random() * (max - min) + min );
}

console.log( random(3, 5) );