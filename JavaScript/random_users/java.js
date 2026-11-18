const kortit = document.querySelector('#kortit');

$.ajax({
    url: 'https://randomuser.me/api/?results=50&gender=female&nat=fi',
    dataType: 'json',
    success: function(data){        
        for(const user of data.results){
            const card = document.createElement('article');
            const name = document.createElement('h1');
            const gender = document.createElement('p');
            const nationality = document.createElement('p');
            const email = document.createElement('p');
            const pic = document.createElement('img');

            name.textContent = user.name.first +" "+ user.name.last;
            gender.textContent = "Gender: "+user.gender;
            nationality.textContent = "Nationality: "+user.nat;
            email.textContent = "Email: "+user.email;
            
            card.append(name, gender, nationality, email);
            kortit.append(card);
        }
    }
})