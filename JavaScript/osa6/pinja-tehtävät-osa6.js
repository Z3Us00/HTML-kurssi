//1.
console.log("1.");
const luvut = [2, 4, 6];

const tuplat = luvut.map(p => p * 2);
console.log(tuplat);

//2.
console.log("2.");
const luvut2 = [4, 12, 8, 20];

const filtered = luvut2.filter(p => p >= 10);
console.log(filtered);

//3.
console.log("3.");
const luvut3 = [2, 8, 15, 20];
const first = luvut3.find(f => f > 10);
console.log(first);

//4.
console.log("4.");
const luvut4 = [4,-2, 8];

const negative = luvut4.filter(n => n < 0);
console.log(negative);

//5.
console.log("5.");
const luvut5 = [2, 3, 5];

const summa = luvut5.reduce((total, int) =>{
    return total + int;
}, 0);

console.log(summa);

//6.
console.log("6.");
const luvut6 = [20, 40, 80];

const discount = luvut6.map(p => p * 0.9);
console.log(discount);

//7.
console.log("7.");
const nimet =  ['Li','Anna','Mikko','Eevi']
const pitkät = nimet.filter(n => n.length >= 5);
console.log(pitkät);

//8.
console.log("8.");
const bools = [false,false,true,false];
const first_ = bools.some(b => b === true);
console.log(first_);

//9.
console.log("9.");
const pisteet = [67,82,49,90];
const over50 = pisteet.every(p => p > 50);
console.log(over50);

//10.
console.log("10.");
const eurot = [12.5,9.9,3.6];
const summa2 = eurot.reduce((total, int) =>{
    return total + int;
}, 0);
console.log(summa2);

//11.
console.log("11.");
const nimet2 = ['Veera','Aino','Oona'];
const sorted = nimet2.sort((a, b) => a.localeCompare(b)) ;
console.log(sorted);

//12.
console.log("12.");
const nums = [12,3,25,8];
const ordered = nums.sort((a, b) => b-a) ;
console.log(ordered);

//13.
console.log("13.");
const names = ['Aino','Sara','Mika'];
const mones = names.indexOf('Sara');
console.log(`Sara:n indexi on ${mones} listassa`);

//14.
console.log("14.");
const tuotteet2 = ['tee','mehu','kahvi'];
const löytyykö = tuotteet2.includes('kahvi');
console.log(löytyykö);

//15.
console.log("15.");
const lämpötilat = [14,18,17,21,20];
const keskiarvo = lämpötilat.reduce((total, int) =>{
    return (total + int);
}, 0);
console.log(keskiarvo/lämpötilat.length);

//16.
console.log("16.");
const opiskelijat = [
    {nimi:'Aino',pisteet:75},
    {nimi:'Mika',pisteet:45},
    {nimi:'Sara',pisteet:88}
];
const validation = opiskelijat
    .filter(o => o.pisteet >= 50)
    .map(o => o.nimi);
console.log(validation);

//17.
console.log("17.");
const nums2 = [14,29,8,41];
const suurin = nums2.reduce((isoin, arvo) => 
    isoin > arvo ? isoin : arvo, nums2[0]);
console.log(suurin);

//18.
console.log("18.");
const lukuja = [1,2,3,4,5,6,7,8];
const parilliset = lukuja.filter(l => l % 2 === 0);
console.log(lukuja)