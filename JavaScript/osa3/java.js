//Harj 1.
// let luku = 7;
// for(let i = 1; i <= 10; i++){
//     console.log(i*luku);
// }


//Harj 2.
// const pisteet = [8, 6, 3, 2, 6, 6, 3];
// let summa = 0;

// for(let i = 0; i < pisteet.length; i++){
//     summa += pisteet[i];
// }
// console.log(`Keski arvo on: ${(summa/pisteet.length).toFixed(1)}`)

//Silmukkatehtävät, poislukien 3, 5, 7 - 9, 16
//Harj 3.
for(let i = 1; i <= 30; i++){
    if(i % 15 === 0) {
        console.log("Fizz Buzz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}