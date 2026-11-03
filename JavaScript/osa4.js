
// Harjoitus 1
function summa(a, b){
    return a + b
}
function erotus(a, b){
    return a - b
}
function tulo(a, b){
    return a * b
}
function jako(a, b){
    return a / b
}
// console.log(summa(1,2))
// console.log(summa(5,4))

// console.log(erotus(1,2))
// console.log(erotus(7,4))

// console.log(tulo(1,2))
// console.log(tulo(3,6))

// console.log(jako(2, 4))
// console.log(jako(12, 3))

// Harjoitus 2
function arvosana(pisteet){
    if(pisteet >= 0 && pisteet <= 49){
        console.log("Hylätty")
    }
    else if(pisteet >= 50 && pisteet <= 69){
        console.log("Tyydyttävä")
    }
    else if(pisteet >= 70 && pisteet <= 89){
        console.log("Hyvä")
    }
    else if(pisteet >= 90 && pisteet <= 100){
        console.log("Kiitettävä")
    }
    else{
        console.log("Virheellinen arvosana. Syötä arvosana 0-100 välillä ja yritä uudelleen!")
    }
}
// arvosana(101)

//Harjoitus 3
function kertotaulu(luku){
    for(let i = 0; i <= 10; i++){
        console.log(`${i} x ${luku} = ${(i * luku)}`)
    }
}
kertotaulu(1);