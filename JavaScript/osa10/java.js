//harj 1.
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const span = document.querySelector('#count');
let count = 0;
console.log(count)

plus.addEventListener('click', () => {
    count += 1;
    span.textContent = count;
    console.log(count)
});
if(count < 1){
    minus.setAttribute('disabled', '');
    console.log("Disabled")
}
if(count > -1)
    {minus.removeAttribute('disabled', '')
    console.log("Enabled")
}

minus.addEventListener('click', () => {
    count -=1;
    span.textContent = count;
    console.log(count)
});

//harj 2.
const input = document.querySelector('#name');
const prev = document.querySelector('#preview');
const form = document.querySelector('#form');

input.addEventListener('input', (event) => {
    prev.textContent = event.target.value;    
});


// kertaus proj.

const tuotteet = [
    {nimi: 'Leivos'},{nimi: 'Kurkku'},{nimi: 'Tomaatti'},
    {nimi: 'Ruisleipä'},{nimi: 'Voi'},{nimi: 'Juusto'}]
const filter = document.querySelector('#filter');
const lista = document.querySelector('#tuotteet');

for(const tuote of tuotteet){createCard(tuote);}

lista.addEventListener('click', (event) => {
    const button = event.target.closest('.favorite-btn');
    if(!button){ return;}

    const card = button.closest('article');
    card.classList.toggle('favourite');
});


function createCard(tuote){
    const contain = document.createElement('li');
    const kortti = document.createElement('article');
    const title = document.createElement('h1');
    
    const suosikki = document.createElement('button');
    suosikki.classList.add('favorite-btn');
    
    suosikki.textContent = "Lisää suosikkeihin";
    title.textContent = tuote.nimi;
    
    kortti.append(title, suosikki);
    contain.append(kortti);
    lista.appendChild(contain);
}
function showCardlist(tuoteLista) {
    lista.replaceChildren();
    for (const tuote of tuoteLista) {
        lista.append(createCard(tuote));
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const tuote = Object.fromEntries(new FormData(createCard(form)))
    lista.append(createCard(tuote));
    form.reset();
});
filter.addEventListener('input', (event) => {
    const search = event.target.value.toLowerCase().trim();
    const suodatetut = tuotteet.filter(tuote =>
        tuote.nimi.toLowerCase().includes(search)
    );
    showCardlist(suodatetut);
});