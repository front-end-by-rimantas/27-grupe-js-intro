/*
analogiski variantai:
if ('' + b === 'NaN')
if (isNaN(b))
*/

function daugyba(a, b) {
    // validacija
    if (typeof a !== 'number') {
        return 'ERROR: pirma reiksme nera skaiciaus tipo';
    }
    if (isNaN(a)) {
        return 'ERROR: pirma reiksme nera tikras skaicius';
    }
    if (isFinite(a) === false) {
        return 'ERROR: pirma reiksme nera tikras skaicius';
    }

    if (typeof b !== 'number') {
        return 'ERROR: antra reiksme nera skaiciaus tipo';
    }
    if (isNaN(b)) {
        return 'ERROR: antra reiksme nera tikras skaicius';
    }
    if (isFinite(b) === false) {
        return 'ERROR: antra reiksme nera tikras skaicius';
    }

    // logika
    const sandauga = a * b;

    // grazinti rezultata
    return sandauga;
}

// console.log( salyga, '->', atsakymas );

console.log(daugyba('labas', 3));
console.log(daugyba(3, 'labas'));
console.log(daugyba(false, 3));
console.log(daugyba(3, false));
console.log(daugyba(true, 3));
console.log(daugyba(3, true));
console.log(daugyba([2], 3));
console.log(daugyba(3, [2]));
console.log(daugyba([2, 7], 3));
console.log(daugyba(3, [2, 7]));
console.log(daugyba(['2, 7', 'asfd'], 3));
console.log(daugyba(3, ['2, 7', 'asfd']));
console.log(daugyba(2, NaN));
console.log(daugyba(NaN, 2));

console.log(daugyba(2, 4), '->', 8);
console.log(daugyba(2, -4), '->', -8);
console.log(daugyba(-2, 4), '->', -8);
console.log(daugyba(-2, -4), '->', 8);

console.log(daugyba(2, Infinity));
console.log(daugyba(Infinity, 2));
console.log(daugyba(2, -Infinity));
console.log(daugyba(-Infinity, 2));