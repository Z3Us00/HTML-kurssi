// 1.
const apiURL = 'https://dummyjson.com/users';

async function getUsers(apiURL){
    try{
        const response = await fetch(apiURL);
        if(!response.ok){ throw new Error(`HTTP error, ${response.status}`); }
        
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log("Failed at:", error);
    }
}

const list = document.querySelector('#kayttajat');

async function appendUsers(){
    const data = await getUsers(apiURL);
    if(!data) return;

    const userData = data.users.map(user => `${user.firstName} ${user.lastName} | ${user.email}`);

    for(const user of userData){
        const row = document.createElement('li');
        row.append(user);
        list.append(row);
    }
}
appendUsers();