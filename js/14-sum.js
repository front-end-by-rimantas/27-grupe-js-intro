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

const kd1 = kurisDidesnis(7, 4);
console.log(kd1);

const kd2 = kurisDidesnis(7, -4);
console.log(kd2);

const kd3 = kurisDidesnis(-7, -4);
console.log(kd3);

const kd4 = kurisDidesnis(-7, 4);
console.log(kd4);