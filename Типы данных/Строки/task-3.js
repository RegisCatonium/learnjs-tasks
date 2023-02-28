'use strict'

// Усечение строки


let string = "Вот, что мне хотелось бы сказать на эту тему:"

function truncate(str, maxlength) {
	if ( str.length <= maxlength ) {
		return str;
	} else {
		return str.substr(0, maxlength - 1) + String.fromCharCode(8230);
	}
}
console.log( truncate(string, 20) )