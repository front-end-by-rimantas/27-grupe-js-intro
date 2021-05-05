/*
SWITCH


*/


const color = 'blue';

switch (color) {
    case 'blue':
        console.log('Melynakis');
        break;

    case 'green':
        console.log('Zaliaakis');
        break;

    default:
        console.log('Neatpazinta akiu spalva');
        break;
}

const day = 7;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;

    default:
        console.log('Neatpazinta diena');
        break;
}

console.log('----------------------');

// paimti puodeli
// isideti arbatos
// isideti saldikli
// isipilti vandens
// ismaisyti
// geriam

const step = 3;

switch (step) {
    case 0:
        console.log('Paimti puodeli');

    case 1:
        console.log('Isideti arbatos');

    case 2:
        console.log('Isideti saldikli');

    case 3:
        console.log('Isipilti vandens');

    case 4:
        console.log('Ismaisyti');

    case 5:
        console.log('Geriam');
        break;

    default:
        console.log('Neatpzintas proceso zingsnis');
        break;
}