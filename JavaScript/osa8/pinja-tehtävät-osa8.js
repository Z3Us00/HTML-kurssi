//1.
console.log("1.");
const teksti = 'JavaScript';
console.log(teksti.length);

//2.
console.log("2.");
const teksti2 = 'hei';
console.log(teksti2.toUpperCase());

//3.
console.log("3.");
const teksti3 = 'HEI';
console.log(teksti2.toLowerCase());

//4.
console.log("4.");
const sana = 'JavaScript';
console.log(sana.includes('Script'));

//5.
console.log("5.");
const teksti5 = '  Aino  ';
console.log(teksti5.trim());

//6.
console.log("6.");
const sana6 = 'Ohjelmointi';
console.log(sana6[0]);

//7.
console.log("7.");
const sana7 = 'JavaScript!';
console.log(sana7[sana7.length-1]);

//8.
console.log("8.");
const teksti8 = '  AINO  ';
console.log(
    teksti8
    .trim()
    .toLowerCase()
);

//9
console.log("9.");
const sana9 = 'JavaScript';
console.log(sana9.indexOf('Script'));

//10
console.log("10.");
const sana10 = 'Tietokone';
console.log(sana10.slice(0, 5));

//11
console.log("11.");
const lause11 = 'Pidän kahvista';
const uus = lause11.replace('kahvista', 'teestä');
console.log(uus);

//12
console.log("12.");
const värit = 'punainen,vihreä,sininen';
const lista = värit.split(',');
console.log(lista);

//13
console.log("13.");
const koodit = ['HTML','CSS','JavaScript'];
console.log(koodit.join(' / '));

//14
console.log("14.");
const pvm = 'JS-2026-01';
console.log(pvm.startsWith('JS-'));

//15
console.log("15.");
const url = 'kuva.png';
console.log(url.endsWith('.png'));

//16
console.log("16.");
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
const sana16 = 'autokoulu';
for(char in sana16){    
    if(sana16[char].includes('a')){
        a += 1;
        continue;
    }
    else if(sana16[char].includes('e')){
       e += 1; 
    }
    else if(sana16[char].includes('i')){
       i += 1; 
    }
    else if(sana16[char].includes('o')){
       o += 1; 
    }
    else if(sana16[char].includes('u')){
       u += 1; 
    }
}
console.log(`A kirjaimia: ${a}, E kirjaimia: ${e}, I kirjaimia: ${i}, O kirjaimia: ${o}, U kirjaimia: ${u}`);

//17
console.log("17.");
const eläin = 'kissa';
const j = eläin.length;
let reversed = [];
for(let i = 0; i < j; i++){
    reversed[i] = eläin[(j - 1) - i];
}
console.log(reversed.join(''));

//18
console.log("18.");
