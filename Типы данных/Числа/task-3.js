'use strict'

// Ввод числового значения

function readNumber() {
	let num = NaN;

	while (Number.isNaN(num)) {
		num = prompt('Введите число', 0);

		if ( num === null || num === '' ) {
			return null;
		} else {
			num = +num;
		}

		if ( !Number.isNaN(num) ) {
			return num;
		}
	}
}

alert( readNumber() );

