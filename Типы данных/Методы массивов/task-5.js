'use strict'

// Скопировать и отсортировать массив

let array = [5, 2, 1, -10, 8];

function compare(a, b) {
	return a - b;
}
function copySorted(arr) {
	return arr.slice().sort(compare);
}

let arr = copySorted(array);
console.log(array);
console.log(arr);


