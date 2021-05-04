/*
MATEMATINES OPERACIJOS: +, -, /, *, ()

*/

const pirmas = 5;
const antras = 8;
const trecias = -7;

const suma = pirmas + antras + trecias;

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log('suma lygu');
console.log(suma);

console.log('--------------------');

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

const fullName = vardas + ' ' + pavarde;

console.log(vardas);
console.log(pavarde);
console.log(fullName);

const introduction = 'Hi, my name is ' + vardas + '!';
console.log(introduction);

const word1 = 'Labas';
const word2 = 'rytas';
const word3 = 'tau';

const sayHi = word1 + ' ' + word2 + ' ' + word3;
console.log(sayHi);

console.log('--------------------');

const marks = [10, 2, 8, 4];
console.log(marks);

const marksSum = marks[0] + marks[1] + marks[2] + marks[3];
console.log(marksSum);

const example = marks[0 + 1 + 2];   // marks[3] -> 4
console.log(example);

const alt = [4, -2, 5, 8, 3, 6];

const altSum = alt[0] - alt[1] + alt[2] - alt[3] + alt[4] - alt[5];
console.log(altSum);

console.log('--------------------');

const dictionary = ['pirmas', 'zodis', 'bus', 'ketvirtas'];

const reverseString = dictionary[3] + ', ' + dictionary[2] + ', ' + dictionary[1] + ', ' + dictionary[0];
console.log(reverseString);