const form = document.querySelector('#lomake');
const password = document.querySelector('#pass');
const passwordConfirm = document.querySelector('#vahvista');
const errorMsg = document.querySelector('#virheViesti');

password.addEventListener('input', passwordMatch);
passwordConfirm.addEventListener('input', passwordMatch);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const object = Object.fromEntries(data);
    console.log(object);
});

function passwordMatch() {
    if (passwordConfirm.value === '') {
        passwordConfirm.setCustomValidity('');
        errorMsg.textContent = '';
        return;
    }
    if (passwordConfirm.value !== password.value) {
        passwordConfirm.setCustomValidity('Salasanat eivät täsmää');
        errorMsg.textContent = 'Salasanat eivät täsmää.';
        
        errorMsg.classList.toggle('invalid');
        errorMsg.classList.remove('valid');
        return;
    }
    passwordConfirm.setCustomValidity('');
    errorMsg.textContent = 'Salasanat täsmäävät.';

    errorMsg.classList.remove('invalid');
    errorMsg.classList.toggle('valid');
}

//teht 3.

const yhteenotto = document.querySelector('#yhteydenotto');
const subject = document.querySelector('#subject');
const radio = document.querySelector('input[type="radio"]:checked');
const lupa = document.querySelector('#lupa');

yhteenotto.addEventListener('submit', (event) =>{
    event.preventDefault();

});
