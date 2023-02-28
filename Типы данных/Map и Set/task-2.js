'use strict'

// Отфильтруйте анаграммы

let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function sorting(str) {
	return str.toLowerCase().split('').sort().join('');
}

function aclean(arr) {
	let map = new Map

	arr.forEach(item => {
		map.set(sorting(item), item);
	})

	return Array.from(map.values());
}

console.log( aclean(array) )