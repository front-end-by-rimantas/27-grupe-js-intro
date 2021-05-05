/*
Skaiciu suma intervale (imtinai)

0 - 4           10
0 - 100         5050
-50 - 50        0
0 - 0           0
5 - 5           5
574 - 815       didelis skaicius
-70 - 30        neigiama skaicius -2020

*/

const nuo = 0;
const iki = 100;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
    suma += i;
}

console.log(`Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`);
console.log('Intervale nuo ' + nuo + ' iki ' + iki + ' suma yra ' + suma + '.');