// Uzsakovas vardu [vardas] [nori/nenori] sriubos, [nori/nenori] pagrindinio patiekalo, [nori/nenori] deserto ir [gerimo pavadinimas] yra pasirinktas gerimas.

function uzsakymas(vardas, noriSriubos, noriPagrindinio, noriDeserto, gerimas) {
    const arNoriSriubos = noriSriubos ? 'nori' : 'nenori';
    const arNoriPagrindinio = noriPagrindinio ? 'nori' : 'nenori';
    const arNoriDeserto = noriDeserto ? 'nori' : 'nenori';

    return `Uzsakovas vardu ${vardas} ${arNoriSriubos} sriubos, ${arNoriPagrindinio} pagrindinio patiekalo, ${arNoriDeserto} deserto ir ${gerimas} yra pasirinktas gerimas.`;
}

console.log(uzsakymas('Petras', false, true, false, 'pienas'))
console.log(uzsakymas('Maryte', false, true, 'pienas'))
console.log(uzsakymas(false, true, 'pienas'))
console.log(uzsakymas(false, 'pienas'))
console.log(uzsakymas(false))
console.log(uzsakymas())

console.log('####################');
console.log('####################');

function order(data) {
    const galimiGerimai = ['pienas', 'gira', 'sultys'];

    const kreipinys = data.vardas ? `vardu ${data.vardas}` : 'nenurodes vardo';
    const noriSriubos = data.sriuba === true ? 'nori' : 'nenori';
    const noriPagrindinio = data.pagrindinis === true ? 'nori' : 'nenori';
    const noriDeserto = data.desertas === true ? 'nori' : 'nenori';
    const noriGerimo = galimiGerimai.includes(data.gerimas) ? `${data.gerimas} yra pasirinktas gerimas` : 'gerimo nepasirinko';

    return `Uzsakovas ${kreipinys} ${noriSriubos} sriubos, ${noriPagrindinio} pagrindinio patiekalo, ${noriDeserto} deserto ir ${noriGerimo}.`;
}

console.log(order({
    vardas: 'Petras',
    sriuba: true,
    pagrindinis: false,
    desertas: true,
    gerimas: 'pienas'
}));

console.log(order({
    sriuba: true,
    pagrindinis: false,
    desertas: true,
    gerimas: 'pienas'
}));

console.log(order({
    sriuba: true,
    desertas: true,
    gerimas: 'pienas'
}));

console.log(order({
    vardas: 'Maryte',
    desertas: true
}));

console.log(order({
    vardas: 'Maryte'
}));

console.log(order({}));