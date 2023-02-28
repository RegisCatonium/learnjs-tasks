'use strict'

// Сортировать в порядке по убыванию

let array = [5, 2, 1, -10, 8];

function compare(a, b) {
	if (a > b) return -1;
	if (a == b) return -1;
	if (a < b) return 1;
}
array.sort(compare);

console.log(array)

