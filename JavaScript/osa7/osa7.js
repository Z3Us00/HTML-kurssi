const opiskelija ={
    nimi: 'Aino',
    ikä: '20',
    koulutusala: 'Ohjelmistokehitys',
    aktiivinen: true,
    print(a){
        console.log(opiskelija);
    }
};
opiskelija.ikä = '21'
opiskelija.pisteet = '999'

const tuoteRekisteri = [
    {id: 1, nimi: 'Tietokone', hinta: 850, saldo: 0},
    {id: 2, nimi: 'Näyttö', hinta: 350, saldo: 2},
    {id: 3, nimi: 'Välimuisti', hinta: 500, saldo: 7},
    {id: 4, nimi: 'Näytönohjain', hinta: 2299, saldo: 50}
];

console.log(etsiID(2));
console.log(etsiID(99));


const päivitetty = tuoteRekisteri.map(t => t.id === 2 ? {...t, hinta: 20} : t)
.filter(t => t.saldo > 0);

console.log(päivitetty);
console.log(tuoteRekisteri);

function etsiID(id){
    const id_ = tuoteRekisteri.find(t => t.id === id);    
    if(id_ !== undefined)
        return id_;

    //Ilmoitetaan jos undefined
    return 'Tuotetta ei löydy rekisteristä.';
}