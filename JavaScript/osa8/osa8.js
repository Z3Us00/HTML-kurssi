//teht 1.
console.log('Tehtävä 1.');
const nimi = '   aino virtanen   '
.trim()
.toLowerCase();

console.log(nimi.length);
console.log(nimi);
console.log(nimi[0],"ja", nimi[nimi.length-1]);

console.log(nimi.replace(' ' , '.'));

//teht 2.
console.log('Tehtävä 2.');
const tiedosto = 'raportti.PDF'.toLowerCase();
const raportti = tiedosto.slice(0, 8);
console.log(raportti)

if(tiedosto.endsWith('.pdf')){
    console.log('Päättyy pdf päätteeseen')
}

//teht 3.
// console.log('Tehtävä 3.');
// const data = ' HTML, CSS , JavaScript, React ';
// const datat = data
//     .split(',')
//     .map(i => i.trim())
//     .filter(i => i !== 'React');

// console.log(datat.join(' | '));


//Kert proj.

kirjoita("moi maailma, mitä kuuluu", "MOI")
function kirjoita(lause, hakusana){
    lause.trim();
    
    let löytyy = false;
    const sanat = lause.split(' ');
    
    if(lause.includes(hakusana)){
        löytyy = true;
    }
    console.log(`Pituus: ${lause.length}, Hakusana: ${löytyy}, Sanoja lauseessa: ${sanat.length},`);
    console.log(lause.toLowerCase());
    console.log(lause.toUpperCase());
    console.log(lause.slice(0, 20));
}
