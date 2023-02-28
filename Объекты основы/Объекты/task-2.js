'use strict'

// Проверка на пустоту

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
	let score = 0;

	for (let key in obj) {
		score++;
	}

	return score === 0 ? true : false;
}