/*
REVERSE STRING
*/

const tekstas = 'satyr';
let reverse = '';

for (let i = 0; i < tekstas.length; i++) {
    reverse = tekstas[i] + reverse;
}

// for (let i = tekstas.length - 1; i >= 0; i--) {
//     reverse += tekstas[i];
// }

// for (let i = 0; i < tekstas.length; i++) {
//     reverse += tekstas[tekstas.length - i - 1];
// }

console.log(tekstas, '->', reverse);