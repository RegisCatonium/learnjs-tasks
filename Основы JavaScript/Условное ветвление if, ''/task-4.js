'use strict'

// Перепишите 'if' в '?'

let result;

let a = 3,
	b = -7;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

result = (a + b < 4) ?  'Мало' : 'Много'
console.log(result)