'use strict'

// Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// Вариант 1:
function checkAge1(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}
// Вариант 2:
function checkAge2(age) {
	return (age > 18) || confirm('Родители разрешили?');
}

checkAge1(19)
checkAge2(17)
