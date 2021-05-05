/*

for (a; b; c) {
    logika
}

a: kintamuju/iteratoriu iniciavimas
b: patikros, ar testi cikla
c: kaip ir ka keisti po kiekvienos ciklo iteracijos

*/

console.log('start');

for (let i = 0; i < 5; i++) {
    console.log('labas', i);
}

console.log('end');


// const marks = [0, 0];
// const marks = [10, 2, 8, 4, 6, 9, 2, 4, 7, 3, 10, 10];
const marks = [10, 2, 8, 4, 6];

let sum = 0;
const count = marks.length;

for (let i = 0; i < count; i++) {
    sum += marks[i];
}

const average = sum / count;

console.log('Pazymiu vidurkis:', average);