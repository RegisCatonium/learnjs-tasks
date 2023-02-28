'use strict'

// Выведите чётные числа

for (let i = 0; i <= 10; i++) {
	if (i === 0 || i % 2 !== 0) continue;
	alert(i);
}