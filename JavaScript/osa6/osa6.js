//harj 1.
const tuotteet = [
  { nimi: 'Hiiri', hinta: 25, saldo: 4 },
  { nimi: 'Näyttö', hinta: 240, saldo: 0 },
  { nimi: 'Kaapeli', hinta: 12, saldo: 7 }
];

const nimet = tuotteet.map(p => p.nimi); 

const saldo = tuotteet.filter(p => p.saldo > 0);

const korot = tuotteet.map(p => p.hinta * 1.255);

// console.log(nimet)
// console.log(saldo)
// console.log(korot )

//harj 2.
const luvut = [60, 80, 95, 70, 85, 90];

const summa = luvut.reduce((summa , luku) => 
    {
    return summa + luku;
}, 0)
const tarkistus = luvut.every(p => p >= 0 && p <= 100);
const isoTulos = luvut.some(p => p >= 95)
const keskiarvo = summa/ luvut.length;

// console.log(summa);
// if(isoTulos) console.log(`Joku sai yli 95 pistettä!`);
// if(tarkistus) console.log(`Kaikki ovat 0-100 välillä`);
// console.log(`Keskiarvo on ${keskiarvo}`);

//harj 3.
const opiskelijat = [
  { id: 1, nimi: 'Aino', pisteet: 82, aktiivinen: true },
  { id: 2, nimi: 'Mika', pisteet: 64, aktiivinen: false },
  { id: 3, nimi: 'Sara', pisteet: 78, aktiivinen: true }
];

const model = opiskelijat.map(p => `${p.nimi} - pisteet:${p.pisteet}`);
console.log(model)

const aktiivinen = opiskelijat
    .filter(o => o.aktiivinen && o.pisteet > 0)
    .map(o => o.pisteet)
    .reduce((summa, pisteet) => (summa + pisteet)/pisteet, 0);
console.log(aktiivinen);