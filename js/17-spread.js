/*
SPREAD OPERATOR

*/

let a = 5;
let b = 8;

console.log('a =', a);
console.log('b =', b);
console.log('----------');

b = a;

console.log('a =', a);
console.log('b =', b);
console.log('----------');

a = 13;

console.log('a =', a);
console.log('b =', b);

console.log('###############');
console.log('###############');


let c = 'labas';
let d = 'rytas';

console.log('c =', c);
console.log('d =', d);
console.log('----------');

d = c;

console.log('c =', c);
console.log('d =', d);
console.log('----------');

c = 'vakaras';

console.log('c =', c);
console.log('d =', d);
console.log('----------');

console.log('###############');
console.log('###############');

// laikas kompleksiniems kintamiesiems

let e = [1, 2];
let f = ['labas', 'rytas'];

console.log('e =', e);
console.log('f =', f);
console.log('----------');

f = e;

console.log('e =', e);
console.log('f =', f);
console.log('----------');

e[0] = 13;

console.log('e =', e);
console.log('f =', f);
console.log('----------');

e = [true, false];

console.log('e =', e);
console.log('f =', f);
console.log('----------');

f = e;

console.log('e =', e);
console.log('f =', f);
console.log('----------');

f[1] = 'testas';

console.log('e =', e);
console.log('f =', f);
console.log('----------');

console.log('###############');
console.log('###############');

let g = [8, 88];
let h = [7, 77];

console.log('g =', g);
console.log('h =', h);
console.log('----------');

h = [...g];

console.log('g =', g);
console.log('h =', h);
console.log('----------');

g[0] = 100;

console.log('g =', g);
console.log('h =', h);
console.log('----------');