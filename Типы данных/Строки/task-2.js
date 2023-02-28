'use strict'

// Проверка на спам

let string = 'buy viagcccViAgR ca cxxxa now';

// решение с использованием indexOf
	function checkSpam(str) {
		let subStr1 = 'viagra',
			subStr2 = 'xxx';

		return checkStr(str, subStr1) || checkStr(str, subStr2) ? true : false;
	}

	function checkStr(str, subStr) {
		str = str.toLowerCase();
		return str.indexOf(subStr) == -1 ? false : true;
	}

console.log( checkSpam(string) )
// --

// решение 2 (includes)
	function checkSpam2(str) {
		let subStr1 = 'viagra',
			subStr2 = 'xxx';

		return checkStr2(str, subStr1) || checkStr2(str, subStr2) ? true : false
	}

	function checkStr2(str, subStr) {
		str = str.toLowerCase();
		return str.includes(subStr)
	}

console.log(checkSpam2(string))