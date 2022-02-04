
// 1. Спросить у пользователя число и единицу измерения
// В обьект tail в свойство с названием единицы изм. записать значение числа от пользователя

let a = Number(prompt('Укажите число'));
let b = prompt('Укажите единицу измерения');

let tail = {
  a : [a],
  b : [b],
}

let tailA = tail.a;
let tailB = tail.b;

console.log(`${tailA} ${tailB}`);

// 2. Создать объект со свойствами box1, box2, box3, box... до 5
// Заполнить свойства null

let boxes = {};

for (let i = 0; i < 6; i++) {
  boxes[`box${i}`] = null;
}

console.log(boxes);
