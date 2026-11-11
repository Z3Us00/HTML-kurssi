console.log('1.');
const opiskelija = { nimi: 'Aino', pisteet: 82 };
console.log(opiskelija.nimi);

console.log('2.');
const opiskelija2 = { nimi: 'Aino', pisteet: 82 };
console.log(opiskelija2.pisteet += 5);

console.log('3.');
const tuote = { hinta: 20 };
console.log(tuote['hinta']);


console.log('4.');
const opiskelijat4 = [{ nimi: 'Aino' }, { nimi: 'Mika' }];
console.log(opiskelijat4[0].nimi);

console.log('5.');
const henkilo = { osoite: { kaupunki: 'Helsinki' } };
console.log(henkilo.osoite?.kaupunki);

console.log('6.');
const tuote1 = { nimi: 'Kynä', hinta: 2.5, varastossa: 12 };
console.log(tuote1);

console.log('7.');
const olio = {nimi:'Sara'};
olio.aktiivinen = true;
console.log(olio);

console.log('8.');
const käyttäjä = {nimi:'Aino',vanhaNumero:'123',puhelin:'456'};

delete käyttäjä.vanhaNumero;
console.log(käyttäjä);

console.log('9.');
const olio1 = {nimi:'Mika',ika:21};
const kentta='ika'; 
console.log(olio1[kentta]);

console.log('10.');
const user = {nimi:'Liisa',email:'liisa@example.fi'};
console.log(Object.hasOwn(user, 'email'));

console.log('11.');
const tuote_1 = {nimi:'Kahvi',hinta:4,maara:6};
console.log(Object.keys(tuote1));

console.log('12.');
const kuukaudet =  {tammi:12,helmi:18,maalis:15};
console.log(Object.values(kuukaudet));

console.log('13.');
const kayttaja = {nimi:'Sara',osoite:{katu:'Asematie 3',kaupunki:'Kerava'}};
console.log(kayttaja.osoite);

console.log('14.');
const kyna = {nimi:'Kynä',hinta:2};
const update = {
    ...kyna,
    hinta: 3
};
console.log(kyna);
console.log(update);

console.log('15.');
const oletukset={teema:'vaalea',kieli:'fi'}; 
const valinnat={teema:'tumma'}; 
const asetukset={...oletukset,...valinnat}; 
console.log(asetukset);

console.log('16.');
const aino = {nimi:'Aino',pisteet:85};
const {nimi, pisteet} = aino;
console.log(nimi, pisteet);

console.log('17.');
const tuotteet = [{nimi:'A',hinta:4},{nimi:'B',hinta:9}];

let summa = 0;
for(const h of tuotteet){
    summa += h.hinta
}
console.log(summa);

console.log('18.');
const luokka = [{nimi:'Aino',p:70},{nimi:'Mika',p:42},{nimi:'Sara',p:91}];
let sorted = [];
const parit = Object.entries(luokka);
for(const o in luokka){
    if(o.p < 60){
        
    }
}
console.log(sorted);