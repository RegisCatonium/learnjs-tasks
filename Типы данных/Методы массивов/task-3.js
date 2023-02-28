'use strict'

// Фильтрация по диапазону "на месте"

let array = [5, 3, 8, 1, 2, 3, 56, 4, 3, 2, 12, 32, 5, 56];

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++)
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			i--;
		}
}

console.log( array );
filterRangeInPlace(array, 5, 9);
console.log( array );