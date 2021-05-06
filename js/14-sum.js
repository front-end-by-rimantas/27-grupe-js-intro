function sum(a, b) {
    return a + b;
}

const s1 = sum(4, 5);
console.log(s1);

const s2 = sum(14, 5);
console.log(s2);

const s3 = sum(14, -4);
console.log(s3);



function labas(vardas) {
    return `Labas, ${vardas}!`;
}

console.log(labas('Petrai'));
console.log(labas('Onute'));
console.log(labas('Alphai'));



function kurisDidesnis(a, b) {
    return a > b ? 'pirmas' : 'antras';
}

console.log(kurisDidesnis(7, 4));
console.log(kurisDidesnis(7, -4));
console.log(kurisDidesnis(-7, -4));
console.log(kurisDidesnis(-7, 4));