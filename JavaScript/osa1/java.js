// console.log("Henri");
// console.log("JavaScript toimii!.")

// const tuote = "tuote";
// let hinta = 5;
// let maara = 2;

// let kokonaishinta = hinta * maara;

// console.log(`Tuote: ${tuote} \nHinta: ${hinta} \nMäärä: ${maara}`);



//Lumo akatemia Perusharjoitukset
//P01. console.log("Hei maailma!");

//P02.
// let int1 = 2;
// let int2 = 6;
// console.log(int1+int2);

//P03.
// console.log(int1-int2);

//P04.
// console.log(int1*int2);

//P05.
//// console.log(int1/int2);

//P06.
// let celsius = 25;
// console.log((celsius*1.8)+32);

// //P07.
// let fahrenheit 100;
// console.log((fahrenheit-32)/1.8);

//P08.
// let miles = 5;
// let formula = 1.609344;
// console.log(`${miles} Mailia on ${(miles*formula).toFixed(2)} kilometria.`)

// //P09.
// let km = 2;
// console.log(`${km} kilometriä on ${(km/formula).toFixed(2)} mailia.`)

//P10.
// let tuuma = 2;
// let muunnos = 2.54;
// console.log(`${tuuma} Tuumaa on ${tuuma*muunnos}senttimetriä`)

// //P011.
// let cm = 2;
// console.log(`${cm} senttimetriä on ${(cm/muunnos).toFixed(2)} tuumaa`)

//P12.
// let yard = 5;
// let muunnos = 0.9144;
// console.log(`${yard} Yardia on ${yard*muunnos} metriä.`)

// P013.
// let metri = 3;
// console.log(`${metri} Metriä on ${(metri/muunnos).toFixed(2)} metriä.`)

//IE01.
let num1;
let num2;
let num3;

function SuurinNum(num1,num2){
    if(num1 > num2){
    console.log(num1);
    }
    else{
        console.log(num2);
    }
}
//IE02.
function suurinKolmesta(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
    console.log(`Isoin: ${num1}`)
    }
    else if(num2 > num1 && num2 > num3){
        console.log(`Isonin: ${num2}`)
    }
    else{
        console.log(`Isoin: ${num3}`)
    }
}
//IE03.
function numeronTila(num1){
    if(num1 < 0)
    {
        console.log("Negatiivinen")
    }
    else if(num1 === 0){
        console.log("Nolla")
    }
    else{
        console.log("Positiivinen")
    }
}
//I04.
function jaollinen(num1){
    if(num1%5==0){
        console.log(`${num1} on jaollinen 5:llä.`)
    }
    else if(num1%11==0){
        console.log(`${num1} on jaollinen 11:sta.`)
    }
    else{
        console.log(`${num1} ei ole jaollinen kummallakaan jakajalla.`)
    }
}

//IE05.
function karkausvuosi(num1){
    if(num1%4==0 && num1%100 != 0){
        console.log(`${num1} on karkaus vuosi`)
    }
    else if(num1%400==0){
        console.log(`${num1} on karkaus vuosi`)
    }
    else{
        console.log(`${num1} ei ole karkaus vuosi`)
    }
}

//IE06.
function parillinenVaiEi(num1){
    if(num1 % 2 == 0){
        console.log(`${num1} on parillinen`)
    }
    else{
        console.log(`${num1} on pariton`)
    }
}

