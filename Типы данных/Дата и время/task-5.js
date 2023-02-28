'use strict'

// Последнее число месяца?

function getLastDayOfMonth(year, month) {
	let newDate = new Date(year, month + 1, 0);
	return newDate.getDate();
}

console.log( getLastDayOfMonth(2012, 2) );






