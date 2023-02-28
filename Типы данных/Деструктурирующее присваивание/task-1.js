'use strict'

// Деструктурирующее присваивание

let user = {
  name: "John",
  years: 30
};

let [name, years, isAdmin = false] = Object.values(user2);

console.log(name);
console.log(years);
console.log(isAdmin);