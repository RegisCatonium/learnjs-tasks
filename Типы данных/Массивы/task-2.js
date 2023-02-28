'use strict'

// Операции с массивами

let styles = ['Джаз', 'Блюз'];

console.log(styles);

styles.push('Рок-н-ролл');

console.log(styles);

let centerElem = Math.floor((styles.length - 1) / 2);
styles[centerElem] = 'Классика';

console.log(styles);

console.log( styles.shift() );
console.log(styles);

styles.unshift('Рэп', 'Регги');

console.log(styles);