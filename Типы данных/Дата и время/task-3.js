'use strict'

// День недели в европейской нумерации

let date = new Date(2012, 0, 1);  // 3 января 2012 года

let getLocalDay = date => date.getDay() == 0 ? 7 : date.getDay()

console.log( getLocalDay(date) );       // вторник, нужно показать 2