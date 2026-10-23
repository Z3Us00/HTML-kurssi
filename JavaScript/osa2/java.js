// let ika = 18;

// if (ika < 13){
//     console.log("lapsi");    
// }
// else if(ika <= 17){
//     console.log("nuori");
// }
// else{
//     console.log("aikuinen")
// }

const isLoggedin = true;
const isAdmin = false;
const isTeacher = true;

if(isLoggedin){
    console.log("Kirjautunut sisään.");
    if(isAdmin||isTeacher){
        console.log("On muokkaus oikeus.")
    }
    else{
        console.log("Ei muokkaus oikeutta.")
    }
}
