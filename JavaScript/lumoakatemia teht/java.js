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
let num4;
let num5;

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

//IE10.
function Voittoa(num1, num2){
    if(num1 > num2){
        console.log(`Voittoa: ${num1-num2}`)
    }
    else{
        console.log(`Tappiota: ${num2-num1}`)
    }
}


//IE11.
function kokeenArvio(num1, num2,num3,num4,num5){
    
}

//IE12.
function vkpäivä(num1){
    switch(num1){
        case 1:
            console.log("maanantai");
            break;
        case 2:
            console.log("tiistai");
            break;
        case 3:
            console.log("keskiviikko");
            break;
        case 4:
            console.log("torstai");
            break;
        case 5:
            console.log("perjantai");
            break;
        case 6:
            console.log("lauantai");
            break;
        case 7:
            console.log("sunnuntai");
            break;
        default:
            console.log("Numero ei ollut 1-7 välillä");
            break;
    }
}

//IE14.
function samaLuku(num1,num2){
    if(num1 == num2){
        console.log("luvut ovat samanarvoisia");
    }
    else{
        console.log("luvut ovat eri arvoisia");
    }
}

//IE15.
function aanestys(num1){
    if(num1<18){
        console.log("Olet liian nuori äänestämään")
    }
    else{
        console.log("voit äänestää")
    }
}

//IE17.
let i500 =0, i100=0, i50=0, i20=0, i5=0;
function rahaMuunnos(num1){
    if(num1>=500)
    {
        i500 = Math.floor(num1/500)
        num1 -= i500*500
    }
    if(num1>=100)
    {
        i100 = Math.floor(num1/100)
        num1 -= i100*100
    }
    if(num1>=50)
    {
        i50 = Math.floor(num1/50)
        num1 -= i50*50
    }
    if(num1>=20)
    {
        i20 = Math.floor(num1/20)
        num1 -= i20*20
    }
    if(num1>=5)
    {
        i5 = Math.floor(num1/5)
        num1 -= i5*5
    }
    console.log(`Tulokset: \n500x ${i500} \n100x ${i100}`+$`\n50x ${i50} \n20x ${i20} \n5x ${i5}`)
}

//IE18.
function kolmioLaskenta(num1, num2, num3){
    if(num1+num2+num3 == 180){
        console.log("On kolmio");
    }
    else{
        console.log("Ei ole kolmio");
    }
}

//Silmukkatehtävät, poislukien 3, 5, 7 - 9, 16
//S01.
function S01(vuodet, laina){
    for(let i = 0; i <= value1;i++){
        laina *= 1.02;
    }
    console.log(`Velan määrä ${vuodet} vuoden jälkeen: ${laina}`);
}

//S02.
let kertoma = 1;
function kertomaa(luku){
    for(let i = 1; i < luku; i++){
        kertoma *= i;
    }
    console.log(`!${kertoma}`);
}

//S04.
function reverseTeksti(sana){
    const letters = Array.from(sana);
    const uusiSana = [];

    for(let i = 0; i <= letters.length-1;i++){
        uusiSana[i] = letters[(letters.length-1)-i];
    }
    console.log(uusiSana.join(""));
}

//S06
function average(){
    const pisteet = [2, 5, 6, 1, 6]
    let summa = 0;
    for(let i = 0; i < pisteet.length; i++){
        summa += pisteet[i];
    }
    console.log(`Keski arvo on: ${(summa/pisteet.length).toFixed(1)}`)
}

//S010.
function S10(){
        for(let i = 1; i <= 100; i++){
        if(i % 15 === 0) {
            console.log("viisitoista");
        }
        else if(i % 5 === 0){
            console.log("viisi");
        }
        else if(i % 3 === 0){
            console.log("kolme");
        }
    }
}

//S011 & S013, S014.
let y = 1;
let x = 0;
let z;
let parittomat = 0;
let parilliset = 0;
function fibonacci(){
    for(let i = 0; i < 10;i++){
        console.log(x);
        if(y%2===1){
            parittomat += x;
        }
        if(y%2===0){
            parilliset += x;
        }
        z = x;
        x = y;
        y = z + x;
    }
    console.log(parilliset);
    console.log(parittomat);
}

//S012.
function palidrome(sana){
    let uusiSana = "";
    for(let i = 0; i <= sana.length-1;i++){
        uusiSana += sana[(sana.length-1)-i];
    }
    if(uusiSana == sana){
        console.log("Palidromi")
    }
    else{
        console.log("Ei palidromi")
    }
}

//S015.
function nimittaja(luku1, luku2){
    
}
