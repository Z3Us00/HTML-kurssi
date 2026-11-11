//Harjoitus 1.
const title = document.querySelector('#title');
const p = document.querySelector('.status');

title.textContent = 'Uusi Otsikko';
p.textContent = 'Valmis';
p.classList.add("Success");

//2.
const kielet = ['HTML','CSS','JavaScript'];
const lista = document.querySelector('#ordered-list');

for(const a of kielet){
    const li = document.createElement('li');
    li.textContent = a;
    li.classList.add("language-item");
    lista.append(li);
}
//3.
const tuote = {
  nimi: 'Näppäimistö',
  hinta: 79,
  saatavilla: true};

const products = document.querySelector('.products');
const article = document.createElement('article');
const card_t = document.createElement('h1');
const card_p = document.createElement('p');
const btn = document.createElement('button');

card_t.textContent = 'Tuote 1';
card_p.textContent = tuote.nimi+ ":" +tuote.hinta;
btn.textContent = 'Osta';

article.append(card_t, card_p, btn);

products.append(article);

//Kertaus projetki.
const kurssit = [
    {nimi: "HTML", taso: "helppo", aktiivinen: false},
    {nimi: "CSS", taso: "helppo", aktiivinen: true},
    {nimi: "JavaScript", taso: "keskivaikea", aktiivinen: false},
    {nimi: "C#", taso: "keskivaikea", aktiivinen: true},
    {nimi: "C++", taso: "vaikea", aktiivinen: true},
];

const container = document.querySelector('.kurssit-container');

for(field in kurssit){
    const kortti = document.createElement('article');
    const kurssiNimi = document.createElement('h1');
    const kurssiTiedot = document.createElement('p');
    
    if(kurssit[field].aktiivinen === false){
        kortti.classList.add("inactive");
    }
    
    kurssiNimi.textContent = kurssit[field].nimi;
    kurssiTiedot.textContent = "Vaikeoustaso: "+ kurssit[field].taso;
    kortti.append(kurssiNimi, kurssiTiedot);
    container.append(kortti);
}





