'use strict'

// Фильтрация по диапазону

let array = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.filter(item => {
		return (item >= a && item <= b);
	})
}

console.log( filterRange(array, 1, 4) );
console.log( array );