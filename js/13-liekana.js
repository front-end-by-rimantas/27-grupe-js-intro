/*
Keli skaiciai dalijasi be liekanos nurodytame inervale imtinai.
*/

const nuo = -8;
const iki = 8;
const daliklis = 7;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

const ats = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;

console.log(ats);