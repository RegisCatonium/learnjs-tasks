'use strict'

// Какой день месяца был много дней назад?

let newDate = new Date(2015, 0, 2);

function getDateAgo(date, days) {
	let d = new Date(date.getTime() - days * 24 * 3600 * 1000);
	return d.getDate();
}

console.log(getDateAgo(newDate, 2));