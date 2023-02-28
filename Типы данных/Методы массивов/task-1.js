'use strict'

// Переведите текст вида border-left-width в borderLeftWidth

let string = 'list-style-image'

function camelize(str) {
	let arr = str.split('-');

	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
	}
	
	return arr.join('');
}

console.log(camelize(string));