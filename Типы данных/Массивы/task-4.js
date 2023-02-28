'use strict'

// Сумма введённых чисел

function sumInput(){
	let arr = [];
	let num = 0;

	while (isFinite(num)) {
		num = prompt('Введите число');

		if ( num === null || num === '' ) {
			return sumArr(arr);
		} else {
			num = +num;
		}

		if ( Number.isFinite(num) ) {
			arr.push(num);
		}
	}
	return sumArr(arr);
}

function sumArr(arr) {
	let sum = 0;
	arr.forEach(item => {
		sum += item;
	})
	return sum;
}
console.log( sumInput() )