// Harj 1.
// ostokset = ['omena', 'banaani', 'maito', 'kurkku', 'tomaatti']

// ostokset.push('yrtti')
// ostokset.shift()

// if(ostokset.includes('banaani')){
//     ostokset.pop()
// }
// console.log(ostokset)

// Harj 2.
const pisteet =[60, 80, 95, 70, 85, 90]
function listanSumma(){
    let sum = 0;
    for(let i = 0; i < pisteet.length; i++){
        sum += pisteet[i];
    }
    return sum;
}

function jaaLista(){
    if(pisteet.length !== 0){
        console.log(listanSumma() / pisteet.length)
    }
    console.log(pisteet.find(p => p > 90))
}
// console.log(listanSumma())
// jaaLista()
//Harj 3.
const nimet = ['Sara', 'Aino', 'Mika']
const kopio = [...nimet]
 
nimet.push('Oskari')
nimet.includes('Aino')
nimet.includes('Leevi')
console.log(nimet.join(', '))

kopio.sort((a, b) => a.localeCompare(b, 'fi'))
console.log(kopio.join(', '))


