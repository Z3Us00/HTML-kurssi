function printList(list){
    console.log(list.join(', '));
}
//T01.
console.log('-T01-');
const kauppalista = ['maito', 'leipä', 'omenat']
printList(kauppalista);

//T02.
console.log('-T02-');
const nimet = ['jaakko', 'pinja' ,'markus', 'maarit', 'erkki']
printList(nimet);

//T03.
console.log('-T03-');
const luvut = [1, 2, 3, 4, 5];
console.log(luvut.length);

//T04.
console.log('-T04-');
const list = ["Matti", "Anna", "Eeva"];
list.push('Arto');
printList(list)

//T05.
console.log('-T05-');
const taul1 = [1, 2, 3], taul2 = [4, 5, 6];
const kopio = [...taul1, ...taul2];
printList(kopio)

//T06.
console.log('-T06-');
const kaikki = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parilliset = [];
for(let i = 0; i < kaikki.length; i++){
    if(kaikki[i] % 2 === 0){
        parilliset.push(kaikki[i]);
    }
}
printList(parilliset);

//T07.
console.log('-T07-');
const unordered = [5, 2, 9, 1, 5, 8, 3];
unordered.sort((a, b) => a - b);
printList(unordered);

//T08.
console.log('-T08-');
const nums = [1, 2, 3, 4, 5];
nums.reverse();
printList(nums);

//T09.
console.log('-T09-');
const jono = ['Matti', 'Anna', 'Eeva'];
printList(jono)

//T010.
console.log('-T010-');
const T10 = [1, 2, 3, 4, 5];
T10.splice(2,1);
printList(T10);

//T011.
console.log('-T011-');
let indexi = kauppalista.findIndex(p => p === 'omenat');
const result = indexi !== -1 ? `alkion indexi on ${indexi}` : `indeksiä ei löytynyt.`;
console.log(result);

//T012.
console.log('-T012-');
const t12 = ['jaakko', 'pinja' ,'markus', 'maarit', 'erkki'];

const viimeiset = t12.splice(t12.length - 2, 2);
printList(viimeiset);

//T013.
console.log('-T013-');
const t13 = [1, 2, 3, 4, 5];
let centerIndex = Math.round(t13.length /2) - 1;
console.log(centerIndex)
t13[centerIndex] = 6;
printList(t13);

//T014.
console.log('-T014-');
const pisteet = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < pisteet.length; i++){
    sum += pisteet[i];
}
console.log(sum);

//T015.
console.log('-T015-');
console.log(sum/pisteet.length)

//T016.
console.log('-T016-');
const kolme = [1,2,3];
const copy3 =  [...kolme, ...kolme, ...kolme];
printList(copy3);

//T017.
console.log('-T017-');
const lista = [1, 2, 2, 3, 4, 4, 5];
const uniques = [];

for(let i = 0; i < lista.length; i++){    
    if(!uniques.includes(lista[i])){
        uniques.push(lista[i])
    }
}
printList(uniques)

//T018.
console.log('-T018-');

const t18 = [1,2,3,4,5];

const siirrä = t18.slice(1, t18.length);

