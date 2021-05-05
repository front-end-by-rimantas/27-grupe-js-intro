/*
TERNARY - sutrumpintas if'as

jam yra butinos "true" ir "false" dalys

struktura:
klausimas ? jei tiesa : jei ne tiesa

*/

const amzius = 144;
const cenzas = 18;

const arIleisti = amzius >= cenzas ? true : false;
console.log('Ar ileisti:', arIleisti);

const arVyresnis = amzius >= cenzas ? 'vyresnis' : 'ne vyresnis';
console.log('Ar vyresnis:', arVyresnis);

const amzius2 = 144;
const cenzas2 = 18;

let arIleisti2 = null;

if (amzius2 >= cenzas2) {
    arIleisti2 = true;
} else {
    arIleisti2 = false;
}

console.log('Ar ileisti (2):', arIleisti2);

console.log('-------------');

const ats = 0 > 1 ? 2 < 3 ? 4 : 5 : 6;

/*
0 > 1 
    ? 2 > 3 
        ? 4 
        : 5 
    : 6;
*/

console.log(ats);

const boo = false ? true ? 1 : 2 : 3;

/*
false 
    ? true 
        ? 1 
        : 2
    : 3;
*/

console.log(boo);