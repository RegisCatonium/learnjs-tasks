'use strict'

// Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = map.keys();

//необходимо преобразовать keys в массив
keys = Array.from(keys)
keys.push("more");

console.log(keys)