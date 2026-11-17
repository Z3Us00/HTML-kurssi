
const sää = document.querySelector('#sää');
const search = document.querySelector('#search');
search.addEventListener('change', (event) => {
    event.preventDefault();
    const city = event.target.value.trim(); 

    fetchWeather(city);
});
async function fetchWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}`;
    const options = {
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-rapidapi-host": "open-weather13.p.rapidapi.com",
            "x-rapidapi-key": "44c3af474bmsh551f89be5f67030p1bc725jsnda95f27d370d",
        },
    };

    try{
        const response = await fetch(url, options);
        if(!response.ok){ throw new Error(`${response.status}`); }
        const data = await response.json();
        console.log(data);
        sää.textContent = 
        `Kaupunki: ${data.name} \nLämpötila: ${Math.floor((data.main.temp-32)/1.8 * 10)/10} C \nTuuli ${data.wind.speed} m/s`;
    }
    catch(error){
        console.log(error);
    }
}